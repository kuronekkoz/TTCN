import db from '../models/index';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const salt = bcrypt.genSaltSync(10);
// CRUD
const authServices = {
	createNewAccount: async (data) => {
		/**
		 * data = {
		 *  username,
		 *  password
		 * }
		 */
		return new Promise(async (resolve, reject) => {
			try {
				let usernameExist = await db.Account.findOne({
					where: {
						username: data.username,
					},
				});
				if (usernameExist) {
					return resolve({
						status: false,
						message: 'Username was already exist',
					});
				}
				let hashed = await bcrypt.hash(data.password, salt);
				let newUser = await db.Account.create({ username: data.username, password: hashed, role: 2, status: true });
				resolve({ status: true, message: 'Create new account successfully', data: newUser });
			} catch (error) {
				reject(error);
			}
		});
	},
	generateAccessToken: (user) => {
		return jwt.sign(
			{
				id: user.id,
				role: user.role,
			},
			process.env.JWT_ACCESS_KEY,
			{
				expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
			},
		);
	},
	findAccountByUserNameAndPassword: async (data) => {
		return new Promise(async (resolve, reject) => {
			try {
				let account = await db.Account.findOne({
					where: { username: data.username },
				});
				if (account == null || account.status === Number(false)) {
					resolve({
						status: false,
						message: 'Wrong username or password',
					});
				}
				let checkPassword = await bcrypt.compare(data.password, account.password);
				if (!checkPassword) {
					resolve({
						status: false,
						message: 'Wrong username or password',
					});
				}
				resolve({
					status: true,
					message: 'Login successfully',
					data: account,
				});
			} catch (error) {
				reject(error);
			}
		});
	},
};

export default authServices;
