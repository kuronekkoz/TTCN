import express from 'express';
import employeeController from '../controllers/emloyeeController';
import tokenMiddleware from '../middleware/tokenMiddleware';
import roleMiddleware from '../middleware/roleMiddleware';

const router = express.Router();
// read
router.get('/', roleMiddleware.verifyAdmin, employeeController.handleGetAllEmloyee);
// create
router.post('/register', roleMiddleware.verifyAdminOrEmployee, employeeController.handleCreateEmloyee);
// update
router.put('/:employeeId', roleMiddleware.verifyAdmin, employeeController.handleUpdateEmloyee);
// delete
router.delete('/:employeeId', roleMiddleware.verifyAdmin, employeeController.handleDeleteEmloyee);
export default router;
