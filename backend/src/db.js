const mysql = require('mysql2/promise');

// Simple connection pool; adjust connectionLimit if you need more concurrency.
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'angular_1',
    waitForConnections: true,
    connectionLimit: 10,
    namedPlaceholders: true
});

async function ping() {
    // Verifies the DB is reachable; throws if not.
    await pool.query('SELECT 1');
}

module.exports = { pool, ping };
