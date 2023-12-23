import db from '../models/index';
import bcrypt from 'bcrypt';

const salt = bcrypt.genSaltSync(10);
// CRUD
const adminServices = {
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
	changeStatusAccount: async (userId, data) => {
		return new Promise(async (resolve, reject) => {
			try {
				let usernameExist = await db.Account.findOne({
					where: {
						id: userId,
					},
				});
				if (!usernameExist) {
					return resolve({
						status: false,
						message: 'Not Found',
					});
				}
				let isUpdate = await db.Account.update(
					{
						status: data.status,
					},
					{ where: { id: userId } },
				);
				if (isUpdate) {
					resolve({ status: true, message: 'Update successfully' });
				} else {
					resolve({ status: false, message: 'Update failed' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
};

export default adminServices;
