# Subscription Management System API

## 📖 Introduction
A **production-ready Subscription Management System API** that handles user authentication, subscriptions, database management, and business logic.  

The API is built with scalability in mind, featuring JWT authentication, database integration, error handling, and automated workflows.

---

## ⚙️ Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB**

---

## 🔋 Features
- **Rate Limiting & Bot Protection** (Arcjet)  
- **Database Modeling** with MongoDB & Mongoose  
- **JWT Authentication** for users and subscription management  
- **Global Error Handling** with middleware  
- **Logging Mechanisms** for monitoring  
- **Email Reminders** with automated workflows (Upstash)  

---

## 🚀 Quick Start

### Prerequisites
- [Git](https://git-scm.com/)  
- [Node.js](https://nodejs.org/en)  
- [npm](https://www.npmjs.com/)  

### Installation
Clone the repository:
```bash
git clone https://github.com/adrianhajdin/subscription-tracker-api.git
cd subscription-tracker-api
```

Install dependencies:
```bash
npm install
```

### Environment Setup
Create a `.env.local` file in the root directory and add:
```env
PORT=5500
SERVER_URL="http://localhost:5500"
NODE_ENV=development
DB_URI=
JWT_SECRET=
JWT_EXPIRES_IN="1d"
ARCJET_KEY=
ARCJET_ENV="development"
QSTASH_URL=http://127.0.0.1:8080
QSTASH_TOKEN=
EMAIL_PASSWORD=
```

### Run the Project
```bash
npm run dev
```
Visit [http://localhost:5500](http://localhost:5500) to test.

---

## 🕸️ Example Snippet

```json
{
  "name": "Elite Membership",
  "price": 139.00,
  "currency": "USD",
  "frequency": "monthly",
  "category": "Entertainment",
  "startDate": "2025-01-20T00:00:00.000Z",
  "paymentMethod": "Credit Card"
}
```
