import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './src/routes/users.route.js';

const app = express();

// Middleware
app.use(express.json()); // Express built-in middleware for parsing JSON bodies
app.use(helmet()); // Helmet for securing Express apps by setting various HTTP headers
app.use(bodyParser.json()); // bodyParser for parsing request bodies
app.use(cors({ origin: '*' })); // CORS middleware for enabling cross-origin requests

// Routes
app.use('/users', userRoutes); // Mounting user routes

// Start the server
const PORT = process.env.PORT || 5000; // Allow setting port via environment variable
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
