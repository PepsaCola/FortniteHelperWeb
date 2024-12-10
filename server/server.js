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
    const text = req.query.text || ''; // Отримуємо текст із запиту

    number = 56; // Початкова кількість результатів
    let query = `
        SELECT TOP ${number}
            l.itemID,
                b.BRID as brID,
               b.Images as brI,
               b.ItemName as brN,
               b.ItemDescription as brDes,
               b.Chapter as brChap,
               b.Season as brSeason,
               rarBr.RarityName as brRarity,
               tBr.TypeName as bType,
               ins.InstrumentsID as insID,
               ins.Images as insI,
               ins.ItemName as insN,
               ins.ItemDescription as insDes,
               rarIns.RarityName as insRarity,
               tIns.TypeName as insType,
               t.TracksID as tID,
               t.AlbumArt as trI,
               t.ItemTitle as trN,
               t.Artist as tArtist,
               t.ReleaseYear as tReleaseYear,
               t.Duration as tDuration,
               leg.LegoID as legID,
               leg.Images as legI,
               leg.ItemName as legN,
               c.CarsID as carID,
               c.Images as carI,
               c.ItemName as carN,
               c.ItemDescription as carDes,
               rarC.RarityName as carRarity,
               tCar.TypeName as carType
        FROM Items l
                 JOIN BR b ON l.BRID = b.BRID
                 JOIN Festival f ON l.FestivalID = f.FestivalID
                 JOIN Instruments ins ON f.InstrumentsID = ins.InstrumentsID
                 JOIN Tracks t ON f.TracksID = t.TracksID
                 JOIN Lego leg ON l.LegoID = leg.LegoID
                 JOIN Cars c ON l.CarsID = c.CarsID
                 LEFT JOIN Rarities rarBr ON rarBr.RarityID = b.RarityID
                 LEFT JOIN Rarities rarC ON rarC.RarityID = c.RarityID
                 LEFT JOIN Rarities rarIns ON rarIns.RarityID = ins.RarityID
                 left join BRTypes tBr ON tBr.TypeID = b.TypeID
                 left join InstrumentsTypes tIns ON tIns.TypeID = ins.TypeID
                 left join CarsTypes tCar ON tCar.TypeID = c.TypeID
    `;

    // Додаємо фільтр
    let whereClauses = [];
    if (filter !== 'all') {
        whereClauses.push(
            filter === 'br' ? 'b.Images IS NOT NULL' :
                filter === 'lego' ? 'leg.Images IS NOT NULL' :
                    filter === 'race' ? 'c.Images IS NOT NULL' :
                        '(ins.Images IS NOT NULL OR t.AlbumArt IS NOT NULL)'
        );
    }

    if (text.trim()) {
        whereClauses.push(`
            (b.ItemName LIKE '%${text}%' OR
            ins.ItemName LIKE '%${text}%' OR
            t.ItemTitle LIKE '%${text}%' OR
            leg.ItemName LIKE '%${text}%' OR
            c.ItemName LIKE '%${text}%')
        `);
    }

    if (whereClauses.length > 0) {
        query += ` WHERE ${whereClauses.join(' AND ')}`;
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
    const text = req.query.text || ''; // Отримуємо текст із запиту

    let query = `
    SELECT 
      l.itemID,
      b.BRID as brID,
      b.Images as brI,
      b.ItemName as brN,
      b.ItemDescription as brDes,
      b.Chapter as brChap,
      b.Season as brSeason,
      rarBr.RarityName as brRarity,
      tBr.TypeName as bType,
      ins.InstrumentsID as insID,
      ins.Images as insI,
      ins.ItemName as insN,
      ins.ItemDescription as insDes,
      rarIns.RarityName as insRarity,
      tIns.TypeName as insType,
      t.TracksID as tID,
      t.AlbumArt as trI,
      t.ItemTitle as trN,
      t.Artist as tArtist,
      t.ReleaseYear as tReleaseYear,
      t.Duration as tDuration,
      leg.LegoID as legID,
      leg.Images as legI,
      leg.ItemName as legN,
      c.CarsID as carID,
      c.Images as carI,
      c.ItemName as carN,
      c.ItemDescription as carDes,
      rarC.RarityName as carRarity,
      tCar.TypeName as carType
    FROM Items l
      JOIN BR b ON l.BRID = b.BRID
      JOIN Festival f ON l.FestivalID = f.FestivalID
      JOIN Instruments ins ON f.InstrumentsID = ins.InstrumentsID
      JOIN Tracks t ON f.TracksID = t.TracksID
      JOIN Lego leg ON l.LegoID = leg.LegoID
      JOIN Cars c ON l.CarsID = c.CarsID
      LEFT JOIN Rarities rarBr ON rarBr.RarityID = b.RarityID
      LEFT JOIN Rarities rarC ON rarC.RarityID = c.RarityID
      LEFT JOIN Rarities rarIns ON rarIns.RarityID = ins.RarityID
      left join BRTypes tBr ON tBr.TypeID = b.TypeID
      left join InstrumentsTypes tIns ON tIns.TypeID = ins.TypeID
      left join CarsTypes tCar ON tCar.TypeID = c.TypeID
  `;

    // Додаємо фільтр
    let whereClauses = [];
    if (filter !== 'all') {
        whereClauses.push(
            filter === 'br' ? 'b.Images IS NOT NULL' :
                filter === 'lego' ? 'leg.Images IS NOT NULL' :
                    filter === 'race' ? 'c.Images IS NOT NULL' :
                        '(ins.Images IS NOT NULL OR t.AlbumArt IS NOT NULL)'
        );
    }

    if (text.trim()) {
        whereClauses.push(`
            (b.ItemName LIKE '%${text}%' OR
            ins.ItemName LIKE '%${text}%' OR
            t.ItemTitle LIKE '%${text}%' OR
            leg.ItemName LIKE '%${text}%' OR
            c.ItemName LIKE '%${text}%')
        `);
    }

    if (whereClauses.length > 0) {
        query += ` WHERE ${whereClauses.join(' AND ')}`;
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
