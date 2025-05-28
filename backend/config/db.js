const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // necesario para conexiones externas como Railway
  },
});

pool.connect()
  .then(() => console.log("🟢 Conexión exitosa con PostgreSQL"))
  .catch(err => console.error("🔴 Error al conectar con PostgreSQL:", err.message));

module.exports = pool;
