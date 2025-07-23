
const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

const Feedback = {
    async createFeedback(feedbackData) {
        const { name, email, message } = feedbackData;
        const query = 'INSERT INTO feedbacks (name, email, message) VALUES ($1, $2, $3) RETURNING *';
        const values = [name, email, message];
        const result = await pool.query(query, values);
        return result.rows[0];
    },

    async getAllFeedback() {
        const query = 'SELECT * FROM feedbacks ORDER BY created_at DESC';
        const result = await pool.query(query);
        return result.rows;
    },

    async getFeedbackById(id) {
        const query = 'SELECT * FROM feedbacks WHERE id = $1';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
    },

    async updateFeedback(id, feedbackData) {
        const { name, email, message } = feedbackData;
        const query = 'UPDATE feedbacks SET name = $1, email = $2, message = $3 WHERE id = $4 RETURNING *';
        const values = [name, email, message, id];
        const result = await pool.query(query, values);
        return result.rows[0];
    },

    async deleteFeedback(id) {
        const query = 'DELETE FROM feedbacks WHERE id = $1 RETURNING *';
        const values = [id];
        const result = await pool.query(query, values);
        return result.rows[0];
    },
};

module.exports = Feedback;