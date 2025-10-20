import pool from '../database/connection.js';

export const getAllEmployees = async () => {
  const [rows] = await pool.query('SELECT * FROM employees');
  return rows;
};

export const addEmployee = async (data) => {
  const { nombre, cargo, puntaje } = data;
  const [result] = await pool.query(
    'INSERT INTO employees (nombre, cargo, puntaje) VALUES (?, ?, ?)',
    [nombre, cargo, puntaje]
  );
  return result.insertId;
};
