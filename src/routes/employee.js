import express from 'express';
const router = express.Router();
import { AddEmployee, GetEmployee, DeleteEmployee } from '../services/employee';

const AppRoutes = (db) => {

    router.post('/employees', (req, res) => AddEmployee(req, res, db));
    router.get('/employees', (req, res) => GetEmployee(req, res, db));
    router.delete('/employees/:email', (req, res) => DeleteEmployee(req, res, db))

    return router;
}

export default AppRoutes;
