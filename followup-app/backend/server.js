import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import employeeRoutes from './routes/employees.js';
import './database/connection.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/employees', employeeRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
