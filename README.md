# BuyMe – Backend 🛠️

The backend of **BuyMe**, a full-stack e-commerce platform, built with **Node.js**, **Express.js**, and **MongoDB**. It provides secure authentication, role-based access, product management, and cloud-based image handling.

## 🚀 Live Frontend

🔗 [BuyMe Live Site](https://buyme-client-dg4x.vercel.app/)

## 🏗️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Token), bcrypt
- **Cloud Storage:** Cloudinary (for image uploads)
- **Environment Management:** dotenv
- **Validation & Security:** Express middleware, Helmet, CORS

---

## ✨ Features

- 🔐 **JWT Authentication** – Secure user login system
- 👤 **Role-based Access Control** – Admin & General users
- 🛍️ **Product Management** – Add, update, delete products
- 🛒 **Cart Functionality** – Users can add and remove products
- ☁️ **Image Uploads** – Cloudinary integration for efficient image storage
- 🛡️ **Secure Password Handling** – Bcrypt password hashing
- 🔎 **Search & Filtering** – Retrieve products efficiently

---

## ⚙️ Installation & Setup

### 📌 Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (or MongoDB Atlas)
- A [Cloudinary](https://cloudinary.com/) account for image uploads

### 🔧 Setup Instructions

#### 1️⃣ Clone the Repository
```bash
git clone https://github.com/md-sakib1122/BuymeServer.git
cd buymeserver
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables
```Create a .env file inside the backend/ directory and add:

MONGODB_URI =your_mongodb_connection_string
TOKEN_SECRET_KEY  = your_jwt_secret
FRONTEND_URL = http://localhost:5173
PORT = 3000
NODE_ENV = production
```

### 4️⃣ Start the Server
```bash
node index.js



