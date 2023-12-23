import jwt from 'jsonwebtoken';
import HttpStatusCode from '../helper/HttpStatusCode';
import db from '../models';

const tokenMiddleware = {
	verifyToken: async (req, res, next) => {
		const token = req.headers.token;
		if (token) {
			const accessToken = token.split(' ')[1];
			jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, async (err, user) => {
				if (err) {
					return res.status(HttpStatusCode.FORBIDDEN).json({ message: 'Token is not valid' });
				}
				const userDB = await db.Account.findOne({ where: { id: user.id } });
				if (userDB) {
					//gan them truong user them du lieu
					req.user = user;
					next();
				} else {
					return res
						.status(HttpStatusCode.NOT_ACCEPTABLE)
						.json({ message: 'This account has been delete. Please contact with us' });
				}
			});
		} else {
			return res.status(HttpStatusCode.UNAUTHORIIZED).json({ message: "You're not authenticated" });
		}
	},
};
export default tokenMiddleware;
