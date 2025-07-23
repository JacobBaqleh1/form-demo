CREATE TABLE feedbacks (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    feedback_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)