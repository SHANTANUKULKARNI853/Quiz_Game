# Quiz Game

## Description
This is a simple **Quiz Game** built using the **MERN stack (MongoDB, Express, React, Node.js)**. The app fetches quiz questions from an API and displays them in a user-friendly interface.

## Features
- Fetches **10 quiz questions** from OpenTDB API.
- Multiple-choice questions with instant feedback.
- Displays **final score** after quiz completion.
- Built with **React** for the frontend and **Node.js + Express** for the backend.
- Deployed on **Vercel** for the frontend and **Render/Heroku** for the backend.

## Technologies Used
- **Frontend**: React, Axios, React Router
- **Backend**: Node.js, Express, Axios
- **Database**: No database used (questions fetched from OpenTDB API)
- **Deployment**: Vercel (Frontend), Render/Heroku (Backend)

## Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/SHANTANUKULKARNI853/Quiz_Game.git
cd Quiz_Game
```

### 2. Install Dependencies
#### Backend
```bash
cd backend
npm install
```
#### Frontend
```bash
cd frontend
npm install
```

### 3. Run the Project Locally
#### Start Backend Server
```bash
cd backend
node server.js
```
#### Start Frontend
```bash
cd frontend
npm start
```

### 4. Open in Browser
```
http://localhost:3000
```

## Deployment

### **Frontend Deployment (Vercel)**
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy the frontend:
   ```bash
   cd frontend
   vercel
   ```

### **Backend Deployment (Render/Heroku)**
1. Push backend code to GitHub.
2. Deploy backend on **Render/Heroku**.
3. Get the **deployed backend URL** and update API calls in frontend:
   ```javascript
   axios.get("https://your-backend-url.com/api/questions")
   ```

## Live Demo
Frontend: [https://quiz-game.vercel.app](https://quiz-game.vercel.app)  
Backend: [https://your-backend-url.com](https://your-backend-url.com)

## Author
👤 **Shantanu Kulkarni**

## License
This project is licensed under the **MIT License**.

