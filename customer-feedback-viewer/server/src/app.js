const express = require('express');
const cors = require('./middleware/cors');
const feedbackRoutes = require('./routes/feedback');

const app = express();

// Middleware
app.use(cors);
app.use(express.json());

// Routes
app.use('/api/feedback', feedbackRoutes);

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;