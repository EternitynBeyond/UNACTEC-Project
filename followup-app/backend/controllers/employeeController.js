import { getAllEmployees, addEmployee } from '../models/employeeModel.js';

export const listarEmpleados = async (req, res) => {
  try {
    const empleados = await getAllEmployees();
    res.json(empleados);
  } catch (err) {
    console.error('Error al listar empleados:', err.message);
    res.status(500).json({ error: 'Error al obtener empleados' });
  }
};

export const registrarEmpleado = async (req, res) => {
  try {
    const id = await addEmployee(req.body);
    res.status(201).json({ message: 'Empleado registrado correctamente', id });
  } catch (err) {
    console.error('Error al registrar empleado:', err.message);
    res.status(500).json({ error: 'Error al registrar empleado' });
  }
};
