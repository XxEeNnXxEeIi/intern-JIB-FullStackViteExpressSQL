const mysql = require('mysql2/promise');

// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '', 
    database: 'tanachod_school',
    port: 3306, // Default port for MySQL
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

(async () => {
    try {
        const [rows] = await pool.query('SELECT 1 + 1 AS result');
        console.log('Database connection successful:', rows);
    } catch (err) {
        console.error('Database connection failed:', err.message);
    }
})();

module.exports = pool;
