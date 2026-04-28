import { Resolver, Mutation, Args, Context, Int } from '@nestjs/graphql';
import { OrderService } from './order.service';

@Resolver()
export class OrderResolver {
  constructor(private orderService: OrderService) {}

  // 🔥 CREATE ORDER
  @Mutation(() => String)
  async createOrder(@Context() context) {
    const user = context.req.user;
    const order = await this.orderService.createOrder(user.id);
    return `Order created with ID: ${order.id}`;
  }

  // 🔥 ADD ITEM
  @Mutation(() => String)
  async addItem(
    @Args('orderId', { type: () => Int }) orderId: number,
    @Args('menuItemId', { type: () => Int }) menuItemId: number,
    @Args('quantity', { type: () => Int }) quantity: number,
  ) {
    await this.orderService.addItem(orderId, menuItemId, quantity);
    return "Item added";
  }

  // 🔥 CHECKOUT
  @Mutation(() => String)
  async checkoutOrder(
    @Args('orderId', { type: () => Int }) orderId: number,
    @Context() context
  ) {
    const user = context.req.user;
    await this.orderService.checkoutOrder(orderId, user);
    return "Order checked out successfully";
  }

  // 🔥 CANCEL
  @Mutation(() => String)
  async cancelOrder(
    @Args('orderId', { type: () => Int }) orderId: number,
    @Context() context
  ) {
    const user = context.req.user;
    await this.orderService.cancelOrder(orderId, user);
    return "Order cancelled";
  }
}