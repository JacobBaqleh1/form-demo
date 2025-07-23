const express = require('express');
const cors = require('./src/middleware/cors');
const feedbackRoutes = require('./src/routes/feedback');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors);
app.use(express.json());
app.use('/api/feedback', feedbackRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});