// filepath: customer-feedback-viewer/server/src/routes/feedback.js

const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

// Route to get all feedback entries
router.get('/', feedbackController.getAllFeedback);

// Route to submit new feedback
router.post('/', feedbackController.submitFeedback);

module.exports = router;