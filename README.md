# 💼 React Job Board

A modern, responsive job board application built with **React**, **TailwindCSS**, and a mock backend using **JSON Server**. Originally followed along with a tutorial by [Traversy Media](https://www.youtube.com/@TraversyMedia), and extended it with additional features, deployment, and improvements.

---

## 🔗 Live Demo

- 🌐 **Frontend (Netlify):** [Netlify-Link](https://react-jobs-platform.netlify.app/)
- 🛠️ **Backend API (Render):** [Render-link](https://json-server-job-api.onrender.com)

---

## 🧠 Based On

Tutorial by **Traversy Media**:  
📺 [React Job Board Project](https://www.youtube.com/watch?v=LDB4uaJ87e0)

I used the tutorial as a base and built on it with:

- ✅ Working **search/filter functionality**
- ✅ **Deployment** to Netlify & Render
- ✅ **Custom enhancements** (form validation, improved UI, cleanup, etc.)

---
## 📸 Preview

![Screenshot](https://github.com/user-attachments/assets/81e67c18-936c-455c-94cb-e82a70d8edbb)


## ✨ Features

- 🔍 Search and filter job listings by keyword
- ➕ Add, edit, and delete job posts
- 🧪 Mock backend using JSON Server
- 💨 Tailwind CSS UI
- 🗂️ Dynamic routes via React Router
- ☁️ Full deployment (Netlify + Render)

---

## 🧰 Stack

| Frontend | Backend | Deployment |
|----------|---------|------------|
| React + Vite | JSON Server | Netlify (frontend) |
| Tailwind CSS | Node.js wrapper for JSON Server | Render (backend API) |

---

## 🚀 Setup & Run Locally

### 1. Clone

```bash
git clone https://github.com/yourusername/react-job-board
cd react-job-board
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start frontend
```bash
npm run dev
```

### 4. Start backend (mock API)
```bash
node server.js
# or
json-server --watch db.json --port 5000
```

## 🧾 Deployment Instructions

### 📦 Netlify (Frontend)

- Link your GitHub repo to Netlify
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- Add a `_redirects` file in the `public` folder with the following content:

```txt
/* /index.html 200
```

## ⚙️ Render (Backend API)

- Create a **New Web Service** on [Render](https://render.com)
- Connect it to your GitHub repo
- **Build Command**: `npm install`
- **Start Command**: `node server.js`
- Make sure `db.json` is in the **root** of your repo (contains mock job data)

---

## 🤝 Credits
Original project idea from Traversy Media YouTube Channel
Customized, deployed & enhanced by Isra

## 📬 Contact

For any questions or collaborations, feel free to reach out:  
[aerisxbase@gmail.com](mailto:aerisxbase@gmail.com)

