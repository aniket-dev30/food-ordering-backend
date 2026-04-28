# 🍔 Role-Based Food Ordering Backend

## 🚀 Tech Stack

* NestJS
* GraphQL
* Prisma ORM
* SQLite

---

## 🎯 Features

* Role-Based Access Control (RBAC)
* Country-Based Access Control (ReBAC)
* Restaurant & Menu Management
* Order Creation & Management
* Checkout & Cancel Restrictions

---

## 👥 Roles

* **ADMIN** → Full access
* **MANAGER** → Can checkout & cancel orders
* **MEMBER** → Can only create orders

---

## 🌍 Country Restriction (ReBAC)

Users can only access restaurants and perform actions within their assigned country.

---

## ⚙️ Setup

```bash
npm install
npx prisma migrate dev
npx prisma generate
npm run start:dev
```

---

## 🧪 GraphQL Playground

👉 http://localhost:3000/graphql

---

## 📌 Sample Queries

### Create Order

```graphql
mutation {
  createOrder
}
```

### Add Item

```graphql
mutation {
  addItem(orderId: 1, menuItemId: 1, quantity: 2)
}
```

---

## 📸 Screenshots

### 🗄️ Database (Prisma Studio)

<img width="100%" alt="prisma-studio" src="https://github.com/user-attachments/assets/3d4bf035-a95a-493a-81be-590b798bffac" />

---

### ⚡ GraphQL Mutation (Add Item)

<img width="100%" alt="graphql-add-item" src="https://github.com/user-attachments/assets/5dd53fdb-5f7b-4159-a502-5f69a34b20cf" />

---

## ✅ Test Queries

### Create Order

```graphql
mutation {
  createOrder
}
```

### Add Item

```graphql
mutation {
  addItem(orderId: 1, menuItemId: 1, quantity: 2)
}
```

### Checkout Order (ADMIN / MANAGER)

```graphql
mutation {
  checkoutOrder(orderId: 1)
}
```

### Cancel Order (ADMIN / MANAGER)

```graphql
mutation {
  cancelOrder(orderId: 1)
}
```

### Get Restaurants with Menu

```graphql
query {
  restaurantsWithMenu {
    name
    menuItems {
      name
      price
    }
  }
}
```

---

## 🧠 Key Concepts Implemented

* RBAC (Role-Based Access Control)
* ReBAC (Country-based access)
* Relational Data Modeling (Prisma)
* GraphQL API Design

---

## 📌 Notes

* Mock user is used for authentication
* SQLite used for simplicity
* Designed for scalability with modular NestJS structure
