import express from 'express';
import cors from 'cors';
import pool from './database/connection.js';
import employeeRoutes from './routes/employees.js';

const app = express();

app.use(cors());
app.use(express.json());


app.get('/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});


app.use('/api/employees', employeeRoutes);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
