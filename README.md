# 📌 ToDora- ATask Management System

A **full-stack task management application** built with **Node.js, Express, MongoDB, and React**.  
This project allows users to register, log in, create, update, and delete tasks while keeping their progress organized.

---

## 🚀 Features

### 👤 **Authentication & User Management**
- User Registration & Login (JWT-based authentication)
- Email verification (via Nodemailer)
- Secure password hashing using **bcryptjs**
- Refresh token & access token mechanism
- Logout functionality with token invalidation

### 📋 **Task Management**
- Create, read, update, and delete tasks
- Mark tasks as **completed** or keep them **pending**
- Attach **deadlines** and images to tasks
- User-specific tasks (only the owner can modify)

### 🎨 **Frontend UI**
- Built with **React 19** & **TailwindCSS**
- **Zustand** for state management
- **SweetAlert2** & **React Hot Toast** for modern alerts & notifications
-  clean design

---

## 🛠️ Tech Stack

### **Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs for password encryption
- Nodemailer for email services
- CORS & Cookie-Parser

### **Frontend**
- React 19
- React Router DOM
- Zustand (state management)
- TailwindCSS & DaisyUI
- Axios (API requests)
- SweetAlert2 & React Hot Toast

---

## 📂 Project Structure
project/
│
├── backend/
│ ├── src/
│ │ ├── controller/ # User & Task controllers
│ │ ├── middleware/ # Auth middleware
│ │ ├── model/ # Mongoose models
│ │ ├── routes/ # API routes
│ │ └── index.js # App entry point
│ ├── package.json
│ └── .env
│
├── frontend/
│ ├── src/
│ │ ├── components/ # UI components
│ │ ├── store/ # Zustand store
│ │ ├── pages/ # Page views
│ │ └── main.jsx # App entry
│ ├── package.json
│ └── vite.config.js
│
└── README.md



---

## ⚙️ Installation & Setup

### **1️⃣ Backend Setup**
```bash
npm install
npm run dev

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
REFRESH_TOKEN_SECRET=your_refresh_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password


| Method | Endpoint                | Description       |
| ------ | ----------------------- | ----------------- |
| POST   | `/api/v1/auth/register` | Register new user |
| POST   | `/api/v1/auth/login`    | Login user        |
| POST   | `/api/v1/auth/verify`   | Verify email      |
| POST   | `/api/v1/auth/refresh`  | Refresh token     |
| POST   | `/api/v1/auth/logout`   | Logout user       |


| Method | Endpoint                   | Description     |
| ------ | -------------------------- | --------------- |
| POST   | `/api/v1/tasks/create`     | Create a task   |
| GET    | `/api/v1/tasks`            | Get all tasks   |
| GET    | `/api/v1/tasks/:id`        | Get single task |
| PATCH  | `/api/v1/tasks/update/:id` | Update task     |
| DELETE | `/api/v1/tasks/delete/:id` | Delete task     |



