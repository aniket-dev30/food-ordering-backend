# 🍔 Role-Based Food Ordering Backend

## 🚀 Tech Stack

* NestJS
* GraphQL
* Prisma ORM
* SQLite

## 🎯 Features

* Role-Based Access Control (RBAC)
* Country-Based Access (ReBAC)
* Restaurant & Menu management
* Order creation and management
* Checkout & cancel restrictions

## 👥 Roles

* ADMIN → full access
* MANAGER → can checkout & cancel
* MEMBER → can only create orders

## 🌍 Country Restriction

Users can only access restaurants in their assigned country.

## ⚙️ Setup

```bash
npm install
npx prisma migrate dev
npx prisma generate
npm run start:dev
```

## 🧪 GraphQL Playground

http://localhost:3000/graphql

## 📌 Sample Queries

```graphql
mutation {
  createOrder
}
```

```graphql
mutation {
  addItem(orderId: 1, menuItemId: 1, quantity: 2)
}
```
