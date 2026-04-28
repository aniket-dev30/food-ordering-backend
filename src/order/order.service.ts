import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  // ✅ Create empty order
  async createOrder(userId: number) {
    return this.prisma.order.create({
      data: {
        userId,
      },
    });
  }

  // ✅ Add item to order
  async addItem(orderId: number, menuItemId: number, quantity: number) {
    return this.prisma.orderItem.create({
      data: {
        orderId,
        menuItemId,
        quantity,
      },
    });
  }

  // 🔥 Checkout order (RBAC)
  async checkoutOrder(orderId: number, user: any) {
    if (user.role === 'MEMBER') {
      throw new Error('Members cannot checkout');
    }

    return this.prisma.order.update({
      where: { id: orderId },
      data: { status: 'PAID' },
    });
  }

  // 🔥 Cancel order (RBAC)
  async cancelOrder(orderId: number, user: any) {
    if (user.role === 'MEMBER') {
      throw new Error('Members cannot cancel');
    }

    return this.prisma.order.update({
      where: { id: orderId },
      data: { status: 'CANCELLED' },
    });
  }
}