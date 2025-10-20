import { getAllEmployees, addEmployee } from '../models/employeeModel.js';

export const listarEmpleados = async (req, res) => {
  try {
    const empleados = await getAllEmployees();
    res.json(empleados);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const registrarEmpleado = async (req, res) => {
  try {
    await addEmployee(req.body);
    res.json({ message: 'Empleado registrado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
