# ✅ Citibank Clone – Vue 3

A responsive, frontend-only clone of the Citibank login and 2FA flow.  
Built for a job trial — and a perfect demonstration of Vue mastery

![Citibank Clone](./public/images/citi.png)

---

## 📌 Summary

This project replicates a modern banking login experience with a secure-looking 2FA step — using only frontend tools.  
It includes validation, form handling, and a clean UI, optimized for both desktop and mobile devices.

---

## ✨ Features

- ✅ Login Form with Validation
- ✅ 2FA Verification Code Flow (via **Formspree**)
- ✅ Realistic Frontend-only UX
- ✅ Persistent form state with LocalStorage
- ✅ Fully Responsive Design (Mobile ➜ Desktop)
- ✅ Route-based navigation with Vue Router

---


## 🧠 Challenge Faced & Solution

**Problem:**  
At first, I set up the 2FA verification code to automatically send after login — but this caused issues when users had no email filled in or tried signing out quickly. It also triggered unwanted API calls.

**Solution:**  
I refactored the logic to manually trigger the Formspree email only **after verifying the email field is filled** and only when the user clicks a "Send Code" button.  
This ensured smoother UX and avoided unnecessary API hits — a more scalable and user-friendly solution.

---

## 🛠️ Technologies Used

| Category        | Technologies                             |
|----------------|------------------------------------------|
| 🖥️ Frontend     | Vue 3, Vue Router, `<script setup>`      |
| 🎨 Styling      | Tailwind CSS, Hero Icons, AOS            |
| 📦 Build Tools  | Vite                                     |
| 🧠 State Mgmt   | VueUse (`useDark`, `useToggle`, etc.)    |
| 💌 Form Handling| Formspree (for sending email verification codes) |
| 🌍 Deployment   | Vercel                                   |

---


## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/project-dashboard.git

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

