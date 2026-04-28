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
* Restaurant & Menu system
* Order creation and management
* Checkout & cancel restrictions

---

## 👥 Roles

* ADMIN → full access
* MANAGER → can checkout & cancel
* MEMBER → can only create orders

---

## 🌍 Country Restriction

Users can only access restaurants within their assigned country.

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

http://localhost:3000/graphql

---

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

---

# 📸 Screenshots

## 🗄️ Database (Prisma Studio)

<img width="1920" height="837" alt="prisma-studio png" src="https://github.com/user-attachments/assets/3d4bf035-a95a-493a-81be-590b798bffac" />


---

## ⚡ GraphQL Mutation (Add Item)

<img width="1920" height="838" alt="graphql-add-item png" src="https://github.com/user-attachments/assets/5dd53fdb-5f7b-4159-a502-5f69a34b20cf" />


---
