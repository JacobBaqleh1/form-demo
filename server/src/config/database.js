module.exports = {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || 'feedback_db',
    user: process.env.DB_USER || 'username',
    password:  process.env.DB_PASSWORD || 'password'
}