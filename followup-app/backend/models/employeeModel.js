import pool from '../database/connection.js';

export const getAllEmployees = async () => {
  const { rows } = await pool.query(
    'SELECT * FROM employees ORDER BY created_at DESC'
  );
  return rows;
};

export const addEmployee = async ({ nombre, cargo, puntaje }) => {
  await pool.query(
    'INSERT INTO employees (nombre, cargo, puntaje) VALUES ($1, $2, $3)',
    [nombre, cargo, puntaje]
  );
};
