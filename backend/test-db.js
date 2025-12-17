const { pool, ping } = require('./src/db');

async function testDB() {
    try {
        console.log('Testing database connection...');
        await ping();
        console.log('✅ DB connection OK');

        // Test loai_tin query
        console.log('\nTesting loai_tin query...');
        const [categories] = await pool.query('SELECT id, ten_loai FROM loai_tin WHERE an_hien = 1 ORDER BY id');
        console.log('✅ Categories found:', categories.length);
        console.log('Sample:', JSON.stringify(categories[0], null, 2));

        // Test tin_tuc query
        console.log('\nTesting tin_tuc query...');
        const [news] = await pool.query(`
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
            LIMIT 5
        `);
        console.log('✅ News found:', news.length);
        console.log('Sample:', JSON.stringify(news[0], null, 2));

        await pool.end();
        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
}

testDB();
