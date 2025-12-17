const express = require('express');
const cors = require('cors');
const { pool, ping } = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/health', async (req, res) => {
    try {
        await ping();
        res.json({ ok: true });
    } catch (err) {
        res.status(500).json({ ok: false, error: err.message });
    }
});

// API: Get all news categories (loai tin)
app.get('/api/loaitin', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT id, ten_loai FROM loai_tin WHERE an_hien = 1 ORDER BY id');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// API: Get approved news with pagination (tin tuc moi)
app.get('/api/tintucmoi', async (req, res) => {
    try {
        const query = `
            SELECT 
                tt.id,
                tt.tieu_de,
                tt.mo_ta,
                tt.ngay,
                tt.id_loai,
                lt.ten_loai
            FROM tin_tuc tt
            LEFT JOIN loai_tin lt ON tt.id_loai = lt.id
            WHERE tt.an_hien = 1
            ORDER BY tt.ngay DESC
        `;
        const [rows] = await pool.query(query);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Example: list users from a table `users` (create the table in MySQL before calling)
app.get('/api/users', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT id, name, email FROM users ORDER BY id DESC');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Example: create a user (expects JSON body with name, email)
app.post('/api/users', async (req, res) => {
    const { name, email } = req.body || {};
    if (!name || !email) {
        return res.status(400).json({ error: 'name and email are required' });
    }
    try {
        const [result] = await pool.query(
            'INSERT INTO users (name, email) VALUES (:name, :email)',
            { name, email }
        );
        res.status(201).json({ id: result.insertId, name, email });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

async function start() {
    try {
        await ping();
        console.log('DB connection OK');
    } catch (err) {
        console.error('DB connection failed:', err.message);
        process.exit(1);
    }

    app.listen(PORT, () => {
        console.log(`API server listening on port ${PORT}`);
    });
}

start();
