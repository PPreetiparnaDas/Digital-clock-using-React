# 🕒 Analog + Digital Indian Clock (React + Vite + React-Bootstrap)

An elegant **Analog + Digital Clock** built with **React (Vite)** and **React-Bootstrap**, showing **Indian Standard Time (IST)** with both **analog clock hands** and **digital time + date**.

---
# My Project

This project is hosted on Netlify: [Live Demo](https://tourmaline-basbousa-47ed72.netlify.app)


## 🚀 Features
- ✅ Analog clock with **hour, minute, and second hands**  
- ✅ Smooth movement for hands  
- ✅ Digital clock with **time, date, and day**  
- ✅ Time zone fixed to **Asia/Kolkata (IST)**  
- ✅ Responsive layout with **React-Bootstrap**  
- ✅ **Light/Dark theme toggle**  

---

## 🛠️ Setup & Installation

1. **Create a new Vite React project**
   ```bash
   npm create vite@latest my-clock -- --template react
   cd my-clock
2.Install dependencies

3.npm install react-bootstrap bootstrap


4.Import Bootstrap CSS
Open main.jsx and add:

import 'bootstrap/dist/css/bootstrap.min.css'


Replace App.jsx code with the provided file (App.jsx in this repo).

5.Run the project

npm run dev

📂 Project Structure
my-clock/
├── public/
├── src/
│   ├── App.jsx   # Main Clock Component
│   ├── main.jsx  # Entry point
│   └── assets/
├── package.json
└── README.md
🎨 UI Preview

Analog Clock inside circular dial with moving hands

Digital Clock showing IST

Theme Toggle for light/dark mode

📌 Notes

This clock runs locally using your system clock, but displays time in Indian Standard Time (UTC+05:30).

You can modify styles inside App.jsx to customize colors, sizes, and animations.

🏷️ Tech Stack

React (Vite)

React-Bootstrap

Bootstrap 5

JavaScript (ES6+)

✨ Author

👩‍💻 Developed by Preetiparna Das
📌 Made with ❤️ using React + Vite + Bootstrap
