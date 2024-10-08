const cors = require('cors');
const express = require('express');
const session = require('express-session');
const connectDB = require('./config/database');
const uploadRoutes = require('./routes/upload');

const app = express();
connectDB();  // Connect to MongoDB

app.use(cors({
    origin: 'http://localhost:5173', // Vite's default port
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'f7c8f7e0c10a3b6c8e3f77d03e8f8c6e', // Change this to your own secret
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

app.use('/api', uploadRoutes);


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
