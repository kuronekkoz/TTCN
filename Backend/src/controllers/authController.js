import HttpStatusCode from '../helper/HttpStatusCode';
import authServices from '../services/authServices';
import sendMail from '../services/mailService';

const authController = {
	handlecreateNewAccount: async (req, res) => {
		try {
			const { status, message, data } = await authServices.createNewAccount(req.body);
			if (status) {
				res.status(HttpStatusCode.OK).json({
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
	handleLogin: async (req, res) => {
		try {
			const { status, message, data } = await authServices.findAccountByUserNameAndPassword(req.body);
			if (status) {
				const accessToken = authServices.generateAccessToken(data);
				res.status(HttpStatusCode.OK).json({
					message: message,
					data: {
						accessToken: accessToken,
						user: data,
					},
				});
			} else {
				res.status(HttpStatusCode.NOT_FOUND).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleTestSendMail: async (req, res) => {
		try {
			await sendMail(
				{
					subject: '1123123',
					body: 'cvlxckjvlxck',
				},
				'ilovepokemon147@gmail.com',
			);
			res.status(HttpStatusCode.OK).json('sendmail');
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
};
export default authController;
