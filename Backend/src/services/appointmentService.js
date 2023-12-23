import db from '../models/index';

// CRUD
const appointmentServices = {
	createAppointment: async (data) => {
		return new Promise(async (resolve, reject) => {
			try {
				let newAppointment = await db.Appointment.create({
					fullName: data.fullName,
					address: data.address,
					phoneNumber: data.phoneNumber,
					email: data.email,
					generic: data.generic,
					appointmentTime: data.appointmentTime,
					serviceId: data.serviceId,
					isComming: true,
				});
				if (newAppointment) {
					resolve({ status: true, message: 'Create new appointment successfully!' });
				} else {
					resolve({ status: false, message: 'Create appointment failed!' });
				}
			} catch (error) {
				console.log(error);
				reject(error);
			}
		});
	},
	getAllAppointment: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				let appointments = await db.Appointment.findAll({
					atributes: [
						'id',
						'fullName',
						'address',
						'phoneNumber',
						'email',
						'generic',
						'appointmentTime',
						'serviceId',
						'updatedBy',
					],
					include: [
						{
							model: db.Account,
							as: 'accountInfo',
							attributes: ['username'],
						},
						{
							model: db.Service,
							as: 'serviceInfo',
							attributes: ['name'],
						},
					],
					raw: true,
					nest: true,
				});
				if (appointments.length < 0) {
					resolve({ status: false, message: 'Get all appointments failed!' });
				} else {
					resolve({ status: true, message: 'Get all appointments successfully!', appointments: appointments });
				}
			} catch (error) {
				console.log(error);
				reject(error);
			}
		});
	},
	updateAppointmentById: async (appointmentId, data, user) => {
		return new Promise(async (resolve, reject) => {
			try {
				console.log(appointmentId, data, user)
				const isUpdate = await db.Appointment.update(
					{
						status: data.status,
						isComming: data.isComming,
						updatedAt: new Date(),
						updatedBy: user.id,
					},
					{ where: { id: appointmentId } },
				);
				if (isUpdate) {
					const appointment = await db.Appointment.findOne({ where: { id: appointmentId } });

					resolve({ status: true, message: 'Update appointment successfully!', data: appointment });
				} else {
					resolve({ status: false, message: 'Update appointment failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	deleteAppointmentById: async (appointmentId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isDelete = await db.Appointment.destroy({ where: { id: appointmentId } });
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

export default appointmentServices;
