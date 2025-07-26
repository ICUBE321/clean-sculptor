# Clean Sculptor

A nutrition-focused web application that helps users track and manage their food lists with caloric information.

## Project Structure

The project is split into two main parts:

- `client/` - React frontend built with Vite
- `server/` - Express.js backend with MongoDB

## Features

- User authentication (signup/login)
- Food search functionality
- Create and manage food lists
- Track nutritional information
- Responsive design with Tailwind CSS
- Profile management

## Tech Stack

### Frontend

- React
- React Router for navigation
- Tailwind CSS for styling
- Vite as build tool

### Backend

- Node.js
- Express.js
- MongoDB for database
- Mongoose as ODM
- Express-validator for input validation

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm or yarn

### Installation

1. Clone the repository

2. Setup Backend:

```sh
cd server
npm install
# Create .env file with required environment variables:
# ATLAS_URI=your_mongodb_connection_string
# PORT=5000
# CLIENT_DOMAIN=http://localhost:5173
# SERVER_DOMAIN=http://localhost:5000
npm start
```

3. Setup Frontend:

```sh
cd client
npm install
# Create .env file if needed
npm run dev
```

The client will be running on http://localhost:5173 and the server on http://localhost:5000.

## Environment Variables

### Backend (.env)

- ATLAS_URI: MongoDB connection string
- PORT: Server port
- CLIENT_DOMAIN: Frontend URL
- SERVER_DOMAIN: Backend URL

### Frontend (.env)

- VITE_SERVER_URL: Backend API URL

## API Endpoints

### User Routes

- POST /login - User login
- GET /users - Get all users
- GET /users/:id - Get user by ID
- POST /users - Create new user
- PUT /users/:id - Update user
- DELETE /users/:id - Delete user

### Food Routes

- GET /foods/all - Get all food lists
- GET /foods - Get food list
- POST /foods - Save food list
