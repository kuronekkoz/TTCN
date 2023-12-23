import express from 'express';
import roleMiddleware from '../middleware/roleMiddleware';
import adminController from '../controllers/adminController';

const router = express.Router();

// Tạo tài khoản cho nhân viên
router.post('/register-account', roleMiddleware.verifyAdmin, adminController.handlecreateNewAccount);

router.put('/change-status-account/:userId', roleMiddleware.verifyAdmin, adminController.handleChangeStatusAccount);

export default router;
