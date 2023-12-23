import db from '../models/index';

// CRUD
const employeeServices = {
	createNewEmloyee: async (data) => {
		return new Promise(async (resolve, reject) => {
			try {
				let newEmployee = await db.Employee.create({
					name: data.name,
					description: data.description,
					position: data.position,
					image: data.image,
				});
				if (newEmployee) {
					resolve({ status: true, message: 'Create new employee successfully!' });
				} else {
					resolve({ status: false, message: 'Create employee failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	getAllEmloyees: async () => {
		return new Promise(async (resolve, reject) => {
			try {
				let employees = await db.Employee.findAll({ atributes: ['id', 'name', 'description', 'position', 'image'] });
				if (employees.length < 0) {
					resolve({ status: false, message: 'Get all employees failed!' });
				} else {
					resolve({ status: true, message: 'Get all employees successfully!', employees: employees });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	updateEmloyeeById: async (employeeId, data) => {
		return new Promise(async (resolve, reject) => {
			try {
				let isUpdate = await db.Employee.update(
					{
						name: data.name,
						description: data.description,
						position: data.position,
						image: data.image,
						updatedAt: new Date(),
					},
					{ where: { id: employeeId } },
				);
				if (isUpdate) {
					resolve({ status: true, message: 'Update employee successfully!' });
				} else {
					resolve({ status: false, message: 'Update employee failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
	deleteEmployeeById: async (employeeId) => {
		return new Promise(async (resolve, reject) => {
			try {
				const isDelete = await db.Employee.destroy({ where: { id: employeeId } });
				if (isDelete) {
					resolve({ status: true, message: 'Delete employee successfully!' });
				} else {
					resolve({ status: false, message: 'Delete employee failed!' });
				}
			} catch (error) {
				reject(error);
			}
		});
	},
};

export default employeeServices;
