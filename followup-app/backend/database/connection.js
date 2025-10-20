import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

try {
  const connection = await pool.getConnection();
  console.log('✅ Conexión a la base de datos establecida.');
  connection.release();
} catch (error) {
  console.error('❌ Error al conectar a la base de datos:', error);
}

export default pool;
