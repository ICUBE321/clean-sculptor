# Clean Sculptor

A nutrition-focused web application that helps users track and manage their food lists with detailed nutritional information.

## Features

- **Food Search**: Search and browse food items with nutritional data
- **List Management**: Create, view, and delete food lists
- **Nutrition Tracking**: Track proteins, carbs, and fats for each food item
- **Unit Conversion**: Support for both grams and kilograms
- **User Authentication**: Secure login and signup functionality

## Tech Stack

### Frontend

- React 18
- React Router v6
- Tailwind CSS for styling
- Axios for API requests
- Vite as build tool

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- Express-validator for input validation
- Edamam Food Database API integration

## Getting Started

### Prerequisites

- Node.js >= 14
- MongoDB
- npm or yarn
- Edamam API credentials

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/clean-sculptor.git
   cd clean-sculptor
   ```

2. Install Backend Dependencies:

   ```bash
   cd server
   npm install
   ```

3. Configure Environment Variables: Create a `.env` file in the server directory:

   ```
   ATLAS_URI=your_mongodb_connection_string
   PORT=5000
   CLIENT_DOMAIN=http://localhost:5173
   SERVER_DOMAIN=http://localhost:5000
   ```

4. Install Frontend Dependencies:

   ```bash
   cd ../client
   npm install
   ```

5. Create Frontend Environment Variables: Create a `.env` file in the client directory:

   ```
   VITE_API_BASE_URL=http://localhost:5000
   VITE_EDAMAM_APP_ID=your_edamam_app_id
   VITE_EDAMAM_APP_KEY=your_edamam_app_key
   ```

### Running the Application

1. Start the Backend:

   ```bash
   cd server
   npm start
   ```

2. Start the Frontend:

   ```bash
   cd client
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## API Endpoints

### Food Lists

- `GET /food_lists/all` - Get all food lists for a user
- `GET /food_lists/:id` - Get specific food list
- `POST /foods` - Create new food list
- `DELETE /food_lists/:id` - Delete food list

### Food Items

- `POST /food` - Add food item to list
- `DELETE /food/:id` - Remove food item from list

### Authentication

- `POST /login` - User login
- `POST /signup` - User registration

## Development

### Project Structure

```
clean-sculptor/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
└── server/
    ├── routes/
    ├── models/
    ├── controllers/
    └── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/NewFeature`
3. Commit your changes: `git commit -m 'Add NewFeature'`
4. Push to the branch: `git push origin feature/NewFeature`
5. Submit a pull request
