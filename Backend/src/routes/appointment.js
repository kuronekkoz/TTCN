import express from 'express';
import appointmentController from '../controllers/appointmentController';
import roleMiddleware from '../middleware/roleMiddleware';

const router = express.Router();
// read
router.get('/', roleMiddleware.verifyAdminOrEmployee, appointmentController.handleGetAllAppointment);
// create
router.post('/register', roleMiddleware.verifyAdminOrEmployee, appointmentController.handleCreateAppointment);
// update
router.put('/:appointmentId', roleMiddleware.verifyAdminOrEmployee, appointmentController.handleUpdateAppointment);
// delete
router.delete('/:appointmentId', roleMiddleware.verifyAdminOrEmployee, appointmentController.handleDeleteAppointment);
export default router;
