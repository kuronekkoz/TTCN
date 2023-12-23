import HttpStatusCode from '../helper/HttpStatusCode';
import serviceServices from '../services/serviceServices';

const serviceController = {
	handleCreateService: async (req, res) => {
		try {
			const { status, message } = await serviceServices.createService(req.body);
			if (status) {
				res.status(HttpStatusCode.CREATED).json({ message: message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message: message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleGetAllService: async (req, res) => {
		try {
			const { status, message, services } = await serviceServices.getAllService();
			if (status) {
				res.status(HttpStatusCode.OK).json({
					message: message,
					data: services,
				});
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleUpdateServiceId: async (req, res) => {
		try {
			const { status, message } = await serviceServices.updateServiceById(req.params.serviceId, req.body);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleDeleteServiceId: async (req, res) => {
		try {
			const { status, message } = await serviceServices.deleteServiceById(req.params.serviceId);
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
export default serviceController;
