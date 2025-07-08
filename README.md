# 🛡️ Express.js Backend - JWT Authentication System

A complete backend system built using **Node.js**, **Express**, **MongoDB**, and **JWT** for secure authentication. This project includes routes for user registration, login, protected user info access, and logout — all while maintaining security through **HTTP-only cookies**.

---

## 📁 Project Structure

```
express-learning/
└── backend/
    ├── controller/
    │   └── authController.js       # Signup, Signin, Logout, GetUser
    ├── middleware/
    │   └── jwtAuth.js              # Middleware to verify JWT token
    ├── model/
    │   └── userSchema.js           # Mongoose schema for user
    ├── router/
    │   └── authRoute.js            # Auth-related API routes
    ├── config/
    │   └── databaseConfig.js       # MongoDB connection logic
    ├── app.js                      # Express app instance
    ├── index.js                    # Server entry point
    ├── .env                        # Secret environment variables (ignored in git)
    └── README.md                   # You’re here
```

---

## 🚀 Features

- ✅ User Signup with Email & Password
- 🔐 JWT-based Authentication (stored in cookies)
- 🔎 Secure Access to Authenticated User Info
- 🚪 Logout functionality
- ⚙️ MongoDB Atlas Integration
- 🧪 Postman-friendly endpoints

---

## 📦 Tech Stack

- **Node.js** & **Express.js**
- **MongoDB** & **Mongoose**
- **JWT (jsonwebtoken)**
- **dotenv**
- **cookie-parser**
- **email-validator**
- **password-validator**

---

## ⚙️ Environment Variables

Create a `.env` file inside the `backend/` folder with the following content:

```
PORT=5001
MONGODB_URL=your_mongodb_connection_string
SECRET=your_jwt_secret_key
CLIENT_URL=http://localhost:3000
```

> 🛑 **DO NOT COMMIT `.env` TO GIT** – Keep your credentials secure.

---

## 🔧 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Prannav-Bansal/Express-backend.git
cd Express-backend/backend

# Install dependencies
npm install

# Run the development server
npm start
```

---

## 🧪 API Endpoints

| Method | Route              | Description               | Auth Required |
|--------|--------------------|---------------------------|----------------|
| POST   | `/api/auth/signup` | Register a new user       | ❌ No           |
| POST   | `/api/auth/signin` | Login and receive JWT     | ❌ No           |
| GET    | `/api/auth/user`   | Get logged-in user info   | ✅ Yes          |
| GET    | `/api/auth/logout` | Logout and clear cookie   | ✅ Yes          |

---

## 📮 Sample API Requests

### ➕ Signup

```json
POST /api/auth/signup
{
  "name": "Pranav",
  "email": "pranav@example.com",
  "password": "123456",
  "confirmPassword": "123456"
}
```

### 🔐 Signin

```json
POST /api/auth/signin
{
  "email": "pranav@example.com",
  "password": "123456"
}
```

### 👤 Get User

```http
GET /api/auth/user
# Requires valid cookie with JWT
```

### 🚪 Logout

```http
GET /api/auth/logout
# Clears cookie token
```

---

## ✅ Notes

- Passwords are currently **not hashed** — for production, integrate `bcryptjs`.
- Cookies are set as **HTTP-only** for security.
- JWT secret should be long and strong in `.env`.

---

## ✍️ Author

**Pranav Bansal**  
🎓 B.Tech CSE (AI & DS) @ Graphic Era Deemed to be University  
🔗 [GitHub: Prannav-Bansal](https://github.com/Prannav-Bansal)

---

## 📜 License

Licensed under the [MIT License](LICENSE).
