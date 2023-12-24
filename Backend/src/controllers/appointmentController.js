import HttpStatusCode from '../helper/HttpStatusCode';
import appointmentServices from '../services/appointmentService';
import sendMail from '../services/mailService';
import moment from 'moment';
const appointmentController = {
	handleCreateAppointment: async (req, res) => {
		try {
			const { status, message } = await appointmentServices.createAppointment(req.body);
			if (status) {
				await sendMail(
					{
						subject: 'Cảm ơn đã đăng ký dịch vụ',
						body: '<h3>Cảm ơn quý khách đăng ký sử dụng dịch vụ của chúng tôi. Xin vui lòng chờ thông tin xác nhận từ phía chúng tôi</h3>',
					},
					req.body.email,
				);
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
			const { status, message, data } = await appointmentServices.updateAppointmentById(
				req.params.appointmentId,
				req.body,
				req.user,
			);
			if (status) {
				if (req.body.status === 1) {
					await sendMail(
						{
							subject: `Đồng ý yêu cầu của khách hàng ${data.fullName}`,
							body: `<h3>Cảm ơn quý khách đã tin tưởng dịch vụ của chúng tôi</h3>
							<h4>Xin mời bạn đến phòng khám của chúng tôi vào lúc ${moment(data.appointmentTime).format('LLL')}</h4>
							`,
						},
						data.email,
					);
					res.status(HttpStatusCode.OK).json({ message });
				} else if (req.body.status === 0) {
					await sendMail(
						{
							subject: 'Từ chối dịch vụ',
							body: `<h3>Cảm ơn quý khách đăng ký sử dụng dịch vụ của chúng tôi.</h3>
							<h4>Chúng tôi xin lỗi vì chưa thể đáp ứng được nhu cầu của quý khách</h4>
							`,
						},
						data.email,
					);
					res.status(HttpStatusCode.OK).json({ message });
				} else res.status(HttpStatusCode.OK).json({ message });
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
