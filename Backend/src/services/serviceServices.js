import db from '../models/index';

// CRUD
const serviceServices = {
	createService: async (data, user) => {
		return new Promise(async (resolve, reject) => {
			try {
				const services = await db.Service.findOne({ where: { name: data.name } });
				if (!services) {
					let newService = await db.Service.create({
						name: data.name,
						description: data.description,
						content: data.content,
						status: true,
						createdBy: user.id,
					});
					if (newService) {
						resolve({ status: true, message: 'Create new service successfully!' });
					} else {
						resolve({ status: false, message: 'Create service failed!' });
					}
				} else {
					resolve({ status: false, message: 'service already exists!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllServiceBystatus: async (status) => {
		return new Promise(async (resolve, reject) => {
			try {
				let services = await db.Service.findAll({
					where: { status: status },
					attributes: ['id', 'name', 'description', 'content', 'status', 'createdBy', 'updatedBy'],
					include: [
						{
							model: db.Account,
							as: 'servicesCreatedBy',
							attributes: ['username'],
						},
						{
							model: db.Account,
							as: 'servicesUpdatedBy',
							attributes: ['username'],
						},
					],
					raw: true,
					nest: true,
				});
				if (services.length <= 0) {
					resolve({ status: false, message: 'Get all services failed!' });
				} else {
					resolve({ status: true, message: 'Get all services successfully!', services: services });
				}
			} catch (error) {
				console.log(error);
				reject(error);
			}
		});
	},
	updateServiceById: async (serviceId, data, user) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isUpdate = await db.Service.update(
					{
						name: data.name,
						description: data.description,
						content: data.content,
						status: data.status,
						updatedAt: new Date(),
						updatedBy: user.id,
					},
					{ where: { id: serviceId } },
				);
				if (isUpdate) {
					resolve({ status: true, message: 'Update service successfully!' });
				} else {
					resolve({ status: false, message: 'Update service failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	deleteServiceById: async (serviceId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isDelete = await db.Service.destroy({ where: { id: serviceId } });
				if (isDelete) {
					resolve({ status: true, message: 'Delete service successfully!' });
				} else {
					resolve({ status: false, message: 'Delete service failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
};

export default serviceServices;
