### ThinkBoard – A Simple Task Manager App

ThinkBoard is a minimalist and clean task manager built using the MERN stack. 
It lets users add, manage, update and delete tasks with a smooth, responsive UI and basic backend protections like rate limiting.

Live Demo:  https://mern-thinkboard-ou91.onrender.com

### Tech Stack

- MongoDB + Mongoose – NoSQL database
- Express.js+ Node.js– Backend APIs
- React (Vite)– Frontend SPA
- Tailwind CSS + DaisyUI – Styling
- React Hot Toast – Notifications
- Express Rate Limiter – API protection

### Features

- Add, update and delete tasks  
- Responsive and user-friendly interface  
- Toast notifications for better UX  
- Basic rate limiting to prevent abuse  
- Clean frontend-backend separation

```
mern-thinkboard/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js
│   │   │   └── upstash.js
│   │   ├── controllers/
│   │   │   └── notesController.js
│   │   ├── middleware/
│   │   │   └── rateLimiter.js
│   │   ├── models/
│   │   │   └── Note.js
│   │   ├── routes/
│   │   │   └── notesRoutes.js
│   │   └── server.js
│   ├── .env
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── NoteCard.jsx
│   │   │   ├── NotesNotFound.jsx
│   │   │   └── RateLimitedUI.jsx
│   │   ├── lib/
│   │   │   ├── axios.js
│   │   │   └── utils.js
│   │   ├── pages/
│   │   │   ├── CreatePage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   └── NoteDetailPage.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── eslint.config.js
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
│
├── .gitignore
└── package.json
```


<img width="1078" height="571" alt="img1" src="https://github.com/user-attachments/assets/e1984fbf-1e65-4b70-bd5b-a2d3a595074d" />
<img width="1079" height="566" alt="img2" src="https://github.com/user-attachments/assets/647ed16f-86df-4435-bea3-a2217d53c65e" />
<img width="1080" height="568" alt="img3" src="https://github.com/user-attachments/assets/55c89ed5-d6d4-4d77-93a6-99d563917cb5" />
<img width="1080" height="573" alt="img4" src="https://github.com/user-attachments/assets/504349e9-1e11-4fdb-8f93-ea5ffd28d10a" />
<img width="1079" height="577" alt="img5" src="https://github.com/user-attachments/assets/24193b53-8fa8-4e2e-82b3-85c9bd336e60" />
<img width="1078" height="571" alt="img6" src="https://github.com/user-attachments/assets/08da4d52-5958-41fd-b484-69a5eca41eab" />
<img width="1078" height="569" alt="img7" src="https://github.com/user-attachments/assets/05f0d41b-fccb-4755-ae12-df4284d39408" />
<img width="1080" height="564" alt="img8" src="https://github.com/user-attachments/assets/85f6a36a-6bf4-49db-85f3-fca1badd837e" />











