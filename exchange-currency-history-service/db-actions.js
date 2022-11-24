const { Pool } = require("pg");

const GetPool = () => {
  const pool = new Pool({
    connectionString: process.env.EXCHANGE_DATABASE_URL,
  });
  pool.on("error", (e) => {
    console.error("DB error", e);
  });
  return pool;
};

const GetParamsFromObject = (record) => {
  return [
    record.PublicationDate,
    record.Name,
    record.Code,
    record.Unit,
    record.PurchasePrice,
    record.SellPrice,
    record.AveragePrice,
  ];
};

const AddExchangeHistoryRecord = async (data) => {
  const pool = GetPool();
  const client = await pool.connect();

  const queryString = `INSERT INTO
   exchange_history.history_record(publication_date,name,code,unit,purchase_price,sell_price,average_price)
   VALUES($1,$2,$3,$4,$5,$6,$7)`;

  try {
    await client.query("BEGIN");

    await data.forEach(async (elem) => {
      await client.query(queryString, GetParamsFromObject(elem));
    });
    await client.query("COMMIT");
  } catch (error) {
    await client.query("ROLLBACK");
  } finally {
    client.release();
  }
};

const GetLatestHistoryRecords = async (maxItems = 120) => {
  const pool = GetPool();
  const client = await pool.connect();
  const queryString = `SELECT * FROM exchange_history.history_record
  ORDER BY publication_date DESC
  LIMIT $1`;
  const result = await client.query(queryString, [maxItems]);
  return result.rows;
};

module.exports = { AddExchangeHistoryRecord, GetLatestHistoryRecords };
