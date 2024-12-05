const express = require('express');
const sql = require('mssql/msnodesqlv8');
const cors = require('cors'); // Імпортуємо CORS

const app = express();
const PORT = 3000;
let number

const config = {
    connectionString:
        'Driver={ODBC Driver 17 for SQL Server};Server=DESKTOP-V70N1TR\\SQLEXPRESS;Database=FortniteHelper;Trusted_Connection=Yes;',
};

// Дозволяємо CORS
app.use(cors());

// Маршрут для отримання результатів пошуку
app.get('/api/search-results', async (req, res) => {
    const filter = req.query.filter || 'all'; // Отримуємо фільтр із запиту
    const text = req.query.text || '';

    number = 56
    let query = `
    SELECT TOP ${number} 
      l.itemID, 
      b.Images as brI, 
        b.ItemName as brN,
      ins.Images as insI,
        ins.ItemName as insN,
      t.AlbumArt as trI,
        t.ItemTitle as trN,
      leg.Images as legI, 
        leg.ItemName as legN,
      c.Images as carI,
        c.ItemName as carN
    FROM Items l
      JOIN BR b ON l.BRID = b.BRID
      JOIN Festival f ON l.FestivalID = f.FestivalID
      JOIN Instruments ins ON f.InstrumentsID = ins.InstrumentsID
      JOIN Tracks t ON f.TracksID = t.TracksID
      JOIN Lego leg ON l.LegoID = leg.LegoID
      JOIN Cars c ON l.CarsID = c.CarsID
  `;

    // Додаємо фільтр
    if (filter !== 'all') {
        query += ` WHERE ${filter === 'br' ? 'b.Images IS NOT NULL' :
            filter === 'lego' ? 'leg.Images IS NOT NULL' :
                filter === 'race' ? 'c.Images IS NOT NULL' :
                    'ins.Images IS NOT NULL or t.AlbumArt IS NOT NULL'}`;
    }

    query += ' ORDER BY AddedDate DESC';

    try {
        const conn = await sql.connect(config);
        const result = await new sql.Request().query(query);
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Server Error');
    }
});


app.get('/api/search-more', async (req, res) => {
    const filter = req.query.filter || 'all'; // Отримуємо фільтр із запиту


    let query = `
    SELECT 
      l.itemID,
      b.Images as brI,
      b.ItemName as brN,
      ins.Images as insI,
      ins.ItemName as insN,
      t.AlbumArt as trI,
      t.ItemTitle as trN,
      leg.Images as legI,
      leg.ItemName as legN,
      c.Images as carI,
      c.ItemName as carN
    FROM Items l
      JOIN BR b ON l.BRID = b.BRID
      JOIN Festival f ON l.FestivalID = f.FestivalID
      JOIN Instruments ins ON f.InstrumentsID = ins.InstrumentsID
      JOIN Tracks t ON f.TracksID = t.TracksID
      JOIN Lego leg ON l.LegoID = leg.LegoID
      JOIN Cars c ON l.CarsID = c.CarsID
  `;

    // Додаємо фільтр
    if (filter !== 'all') {
        query += ` WHERE ${filter === 'br' ? 'b.Images IS NOT NULL' :
            filter === 'lego' ? 'leg.Images IS NOT NULL' :
                filter === 'race' ? 'c.Images IS NOT NULL' :
                    'ins.Images IS NOT NULL OR t.AlbumArt IS NOT NULL'}`;
    }

    query += ` ORDER BY AddedDate DESC OFFSET ${number} ROWS FETCH NEXT 56 ROWS ONLY;`;

    try {
        const conn = await sql.connect(config);
        const result = await new sql.Request().query(query);
        number += 56; // Збільшуємо кількість результатів
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching more data:', error);
        res.status(500).send('Server Error');
    }
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущено на http://localhost:${PORT}`);
});
