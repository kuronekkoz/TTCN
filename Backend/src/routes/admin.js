import express from 'express';
import appointmentController from '../controllers/appointmentController';
import roleMiddleware from '../middleware/roleMiddleware';

const router = express.Router();

// Tạo tài khoản cho nhân viên
router.post('/register', roleMiddleware.verifyAdmin, authController.handlecreateNewAccount);


export default router;
