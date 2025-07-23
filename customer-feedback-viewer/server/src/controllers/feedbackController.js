// filepath: customer-feedback-viewer/server/src/controllers/feedbackController.js

const Feedback = require('../models/feedback');

// Get all feedback entries
exports.getAllFeedback = async (req, res) => {
    try {
        const feedbacks = await Feedback.findAll();
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving feedback', error });
    }
};

// Save new feedback entry
exports.saveFeedback = async (req, res) => {
    const { userId, comment, rating } = req.body;
    try {
        const newFeedback = await Feedback.create({ userId, comment, rating });
        res.status(201).json(newFeedback);
    } catch (error) {
        res.status(500).json({ message: 'Error saving feedback', error });
    }
};