import HttpStatusCode from '../helper/HttpStatusCode';
import employeeServices from '../services/employeeServices';

const employeeController = {
	handleCreateEmloyee: async (req, res) => {
		try {
			const { status, message } = await employeeServices.createNewEmloyee(req.body);
			if (status) {
				res.status(HttpStatusCode.CREATED).json({ message: message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message: message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleGetAllEmloyee: async (req, res) => {
		try {
			const { status, message, employees } = await employeeServices.getAllEmloyees();
			if (status) {
				res.status(HttpStatusCode.OK).json({
					message: message,
					data: employees,
				});
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleUpdateEmloyee: async (req, res) => {
		try {
			const { status, message } = await employeeServices.updateEmloyeeById(req.params.employeeId, req.body);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleDeleteEmloyee: async (req, res) => {
		try {
			const { status, message } = await employeeServices.deleteEmployeeById(req.params.employeeId);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
};
export default employeeController;
