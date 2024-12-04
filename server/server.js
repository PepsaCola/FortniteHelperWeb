const express = require('express');
const sql = require('mssql/msnodesqlv8');
const cors = require('cors'); // Імпортуємо CORS

const app = express();
const PORT = 3000;

const config = {
    connectionString:
        'Driver={ODBC Driver 17 for SQL Server};Server=DESKTOP-V70N1TR\\SQLEXPRESS;Database=FortniteHelper;Trusted_Connection=Yes;',
};

// Дозволяємо CORS
app.use(cors());

// Маршрут для отримання результатів пошуку
app.get('/api/search-results', async (req, res) => {
    let conn;
    try {
        conn = await sql.connect(config);

        const result = await new sql.Request().query(`
      SELECT TOP 40 
        l.itemID, 
        b.Images as brI, 
        ins.Images as insI, 
        t.AlbumArt as trI, 
        leg.Images as legI, 
        c.Images as carI
      FROM Items l
      JOIN BR b ON l.BRID = b.BRID
      JOIN Festival f ON l.FestivalID = f.FestivalID
      JOIN Instruments ins ON f.InstrumentsID = ins.InstrumentsID
      JOIN Tracks t ON f.TracksID = t.TracksID
      JOIN Lego leg ON l.LegoID = leg.LegoID
      JOIN Cars c ON l.CarsID = c.CarsID
      ORDER BY AddedDate DESC;
    `);

        res.json(result.recordset); // Повертаємо дані у форматі JSON
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Помилка на сервері');
    } finally {
        if (conn) await sql.close();
    }
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущено на http://localhost:${PORT}`);
});
