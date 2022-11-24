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

const GetUserWallet = async (userId) => {
  const pool = GetPool();
  const client = await pool.connect();

  const rawSql = `SELECT * FROM exchange_users.wallet WHERE owner_id = $1`;
  const result = await client.query(rawSql, [userId]);
  return result.rows[0];
};

const CreateUserWallet = async (userId) => {
  const pool = GetPool();
  const client = await pool.connect();
  console.log(userId);
  const rawSql = `INSERT INTO exchange_users.wallet(owner_id) 
  VALUES($1)`;

  await client.query("BEGIN");

  try {
    await client.query(rawSql, [userId]);
    await client.query("COMMIT");
  } catch (error) {
    console.log(error);
    await client.query("ROLLBACK");
  } finally {
    client.release();
  }
};

module.exports = { GetUserWallet, CreateUserWallet };
