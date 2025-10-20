import express from 'express';
import { listarEmpleados, registrarEmpleado } from '../controllers/employeeController.js';

const router = express.Router();

router.get('/', listarEmpleados);
router.post('/', registrarEmpleado);

export default router;
