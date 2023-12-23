import express from 'express';
import serviceController from '../controllers/serviceController';
import roleMiddleware from '../middleware/roleMiddleware';

const router = express.Router();
// read
router.get('/', serviceController.handleGetAllService);
// create
router.post('/register', roleMiddleware.verifyAdminOrEmployee, serviceController.handleCreateService);
// update
router.put('/:serviceId', roleMiddleware.verifyAdminOrEmployee, serviceController.handleUpdateServiceId);
// delete
router.delete('/:serviceId', roleMiddleware.verifyAdminOrEmployee, serviceController.handleDeleteServiceId);
export default router;
