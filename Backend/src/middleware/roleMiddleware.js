import HttpStatusCode from '../helper/HttpStatusCode';
import tokenMiddleware from './tokenMiddleware';

const roleMiddleware = {
	verifyAdmin: async (req, res, next) => {
		await tokenMiddleware.verifyToken(req, res, () => {
			if (req.user.role === 1) {
				next();
			} else {
				res.status(403).json({ message: "You don't have permission to access!" });
			}
		});
	},
	verifyEmployees: async (req, res, next) => {
		await tokenMiddleware.verifyToken(req, res, () => {
			if (req.user.role === 2) {
				next();
			} else {
				res.status(HttpStatusCode.FORBIDDEN).json({ message: "You don't have permission to access!" });
			}
		});
	},
	verifyAdminOrEmployee: async (req, res, next) => {
		await tokenMiddleware.verifyToken(req, res, () => {
			if (req.user.role === 2 || req.user.role === 1) {
				next();
			} else {
				res.status(HttpStatusCode.FORBIDDEN).json({ message: "You don't have permission to access!" });
			}
		});
	},
};
export default roleMiddleware;
