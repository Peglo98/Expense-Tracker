# Expense Tracker

Expense Tracker is a full-stack web application for tracking incomes and expenses, built with a client–server architecture.

## Features

- User registration and login (JWT, bcryptjs)
- Income management: add, edit, delete
- Expense management: add, edit, delete
- Dashboard with financial summary and charts (Recharts)
- Export data to Excel (.xlsx)
- File upload and serving (Multer)
- Toast notifications (react-hot-toast)
- Global CORS for API

## Technologies

### Backend

- Node.js & Express
- MongoDB & Mongoose
- JWT for authorization
- bcryptjs for password hashing
- multer for file uploads
- xlsx for reading/writing Excel files
- dotenv for environment configuration
- cors

### Frontend

- React 18 + Vite
- Tailwind CSS
- React Router DOM
- Axios
- Recharts
- moment.js
- emoji-picker-react
- react-hot-toast
- react-icons

### DevOps

- Docker & Docker Compose

## Prerequisites

- Node.js (>=16)
- npm
- MongoDB (or Docker)
- Docker & Docker Compose (optional)

## Local Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Peglo98/Expense-Tracker.git
   cd Expense-Tracker
   ```

2. Backend setup:
   ```bash
   cd backend
   touch .env
   ```
   Fill the `.env` file with:
   ```ini
   MONGO_URI=mongodb://localhost:27017/mydatabase
   JWT_SECRET=your_secret_key
   CLIENT_URL=http://localhost:5173
   PORT=5000
   ```
   ```bash
   npm install
   npm run dev
   ```

3. Frontend setup:
   ```bash
   cd ../frontend/expense-tracker
   npm install
   npm run dev
   ```

Frontend: `http://localhost:5173`, Backend: `http://localhost:5000`.

## Running with Docker

In the root directory:
```bash
docker-compose up --build
```
Services:
- `frontend` on port 5173
- `backend` on port 5000
- `mongo` on port 27017

## Project Structure

```
Expense-Tracker/
├── backend/                # API server
│   ├── config/             # database configuration
│   ├── controllers/        # business logic
│   ├── middleware/         # Express middleware
│   ├── models/             # Mongoose models
│   ├── routes/             # endpoint definitions
│   └── uploads/            # served files
├── frontend/expense-tracker# React + Vite app
│   ├── public/             # public assets
│   └── src/                # React source code
├── docker-compose.yml      # Docker Compose configuration
└── README.md               # project documentation
```

## API Endpoints

- `POST   /api/v1/auth/register` – Register a new user
- `POST   /api/v1/auth/login`    – Login
- `GET    /api/v1/income`        – Get all incomes
- `POST   /api/v1/income`        – Add income
- `PUT    /api/v1/income/:id`    – Update income
- `DELETE /api/v1/income/:id`    – Delete income
- `GET    /api/v1/expense`       – Get all expenses
- `POST   /api/v1/expense`       – Add expense
- `PUT    /api/v1/expense/:id`   – Update expense
- `DELETE /api/v1/expense/:id`   – Delete expense
- `GET    /api/v1/dashboard`     – Dashboard statistics
