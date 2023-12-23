import express from 'express';
import employeeController from '../controllers/emloyeeController';
import tokenMiddleware from '../middleware/tokenMiddleware';
import roleMiddleware from '../middleware/roleMiddleware';

const router = express.Router();
// read
router.get('/', employeeController.handleGetAllEmloyee);
// create
router.post('/register', roleMiddleware.verifyAdminOrEmployee, employeeController.handleCreateEmloyee);
// update
router.put('/:employeeId', roleMiddleware.verifyAdminOrEmployee, employeeController.handleUpdateEmloyee);
// delete
router.delete('/:employeeId', roleMiddleware.verifyAdminOrEmployee, employeeController.handleDeleteEmloyee);
export default router;
