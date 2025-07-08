# 🛡️ Express.js Backend - JWT Authentication

A complete Node.js backend using **Express.js**, **MongoDB**, and **JWT** for secure user authentication. This project supports user signup, login, logout, and accessing protected routes via JWT stored in cookies.

---

## 🚀 Features

- ✅ User Signup
- 🔐 Secure Login with JWT
- 🧠 Protected Route (Get Current User)
- 🍪 Token stored in HTTP-only cookies
- 🚪 Logout functionality
- 📦 MongoDB Atlas Integration
- 🧪 Built for testing via Postman

---

## 🧱 Project Structure

express-learning/
└── backend/
├── controller/
│ └── authController.js # Logic for signup, signin, logout, and getUser
├── middleware/
│ └── jwtAuth.js # Verifies JWT token from cookies
├── model/
│ └── userSchema.js # Mongoose User schema
├── router/
│ └── authRoute.js # Routes for auth endpoints
├── config/
│ └── databaseConfig.js # MongoDB connection logic
├── .env # Environment secrets (ignored in git)
├── app.js # Main express app configuration
└── index.js # Server entry point

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Prannav-Bansal/Express-backend.git
cd Express-backend/backend
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Create a .env file
Make a .env file in the /backend folder:

env
Copy
Edit
PORT=5001
MONGODB_URL=your_mongodb_connection_string
SECRET=your_jwt_secret_key
CLIENT_URL=http://localhost:3000
🔒 Important: Do NOT push this .env file to GitHub. Add it to .gitignore.

▶️ Run the Application
bash
Copy
Edit
npm run start
Server will start at: http://localhost:5001

📮 API Endpoints
Method	Route	Description	Auth Required
POST	/api/auth/signup	Register new user	❌ No
POST	/api/auth/signin	Login & receive JWT	❌ No
GET	/api/auth/user	Get current user	✅ Yes
GET	/api/auth/logout	Logout and clear token	✅ Yes

🧪 Testing with Postman
POST /api/auth/signup

json
Copy
Edit
{
  "name": "Pranav",
  "email": "pranav@example.com",
  "password": "123456",
  "confirmPassword": "123456"
}
POST /api/auth/signin

json
Copy
Edit
{
  "email": "pranav@example.com",
  "password": "123456"
}
GET /api/auth/user
⚠️ Must include the cookie in the request.

GET /api/auth/logout

🔧 Tech Stack
Node.js

Express.js

MongoDB + Mongoose

JWT (jsonwebtoken)

dotenv

cookie-parser

email-validator

password-validator

📝 Notes
Passwords are stored in plain text (for learning only). In production, use bcrypt.

Cookies are HTTP-only for better security.

JWT is used to protect /user and /logout routes.

Modular file structure for scalability.

👤 Author
Pranav Bansal
📍 B.Tech CSE (AI & DS) @ Graphic Era Deemed to be University
🔗 GitHub

📄 License
This project is licensed under the MIT License.

yaml
Copy
Edit

---

✅ Paste this file as `README.md` inside your `backend` folder or root folder.  
Let me know if you'd like a `.env.example` or sample frontend integration.








Ask ChatGPT
