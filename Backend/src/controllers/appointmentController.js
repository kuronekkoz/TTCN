import HttpStatusCode from '../helper/HttpStatusCode';
import appointmentServices from '../services/appointmentService';

const appointmentController = {
	handleCreateAppointment: async (req, res) => {
		try {
			const { status, message } = await appointmentServices.createAppointment(req.body);
			if (status) {
				res.status(HttpStatusCode.CREATED).json({ message: message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message: message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleGetAllAppointment: async (req, res) => {
		try {
			const { status, message, appointments } = await appointmentServices.getAllAppointment();
			if (status) {
				res.status(HttpStatusCode.OK).json({
					message: message,
					data: appointments,
				});
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleUpdateAppointment: async (req, res) => {
		try {
			const { status, message } = await appointmentServices.updateAppointmentById(req.params.appointmentId, req.body);
			if (status) {
				res.status(HttpStatusCode.OK).json({ message });
			} else {
				res.status(HttpStatusCode.BAD_REQUEST).json({ message });
			}
		} catch (error) {
			res.status(HttpStatusCode.BAD_REQUEST).json(error);
		}
	},
	handleDeleteAppointment: async (req, res) => {
		try {
			const { status, message } = await appointmentServices.deleteAppointmentById(req.params.appointmentId);
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
export default appointmentController;
