import HttpStatusCode from '../helper/HttpStatusCode';
import adminServices from '../services/adminService';

const adminController = {
	handlecreateNewAccount: async (req, res) => {
		try {
			const { status, message, data } = await adminServices.createNewAccount(req.body);
			if (status) {
				res.status(HttpStatusCode.CREATED).json({
					message: message,
					data: data,
				});
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({
					message: message,
				});
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleChangeStatusAccount: async (req, res) => {
		try {
			const { status, message } = await adminServices.changeStatusAccount(req.params.userId, req.body);
			if (status) {
				res.status(HttpStatusCode.OK).json({
					message: message,
				});
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({
					message: message,
				});
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
};
export default adminController;
