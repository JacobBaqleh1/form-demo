const Feedback = require('../models/feedback')

exports.getAllFeedback = async (req, res) => {
    try{
        const feedbacks = await Feedback.findAll()
    }
}