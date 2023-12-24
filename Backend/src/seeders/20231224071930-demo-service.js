'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert(
			'Services',
			[
				{
					name: 'Khám và điều trị',
					description:
						'Chuẩn đoán và điều trị hiệu quả các bệnh về hệ hô hấp, hệ tiêu hóa, hệ tuần hoàn, tiết niệu, sinh dục, lông da, xương khớp, các bệnh về mắt và tai',
					status: true,
					createdBy: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Xét nghiệm - Chẩn đoán hình ảnh',
					description:
						'Các phương pháp chẩn đoán hình ảnh hoặc làm xét nghiệm: Siêu âm, X-Quang, Xét nghiệm máu, virus, nước tiểu, da, kháng sinh đồ...',
					status: true,
					createdBy: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phẫu thuật',
					description:
						'Bệnh Viện Thú Y PetCare cung cấp dịch vụ Phẫu thuật theo yêu cầu: triệt sản, cắt đuôi và Phẫu thuật điều trị: nối xương, sỏi niệu, mổ bướu..',
					status: true,
					createdBy: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Phòng chống kí sinh trùng - Tiêm phòng',
					description:
						'Để đảm bảo sức khỏe cho người và vật nuôi, thú cưng cần được tiêm phòng và tái chủng định kì theo hướng dẫn của bác sĩ',
					status: true,
					createdBy: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Chăm sóc răng miệng',
					description:
						'Để phòng ngừa bệnh và hạn chế các tổn thương cho vật nuôi do vệ sinh chưa đúng cách, PetCare cung cấp dịch vụ chăm sóc răng miệng.',
					status: true,
					createdBy: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Thẩm mỹ',
					description:
						'Viện thẩm mỹ ở PetCare cung cấp dịch vụ chăm sóc da lông vật nuôi theo yêu cầu của quý khách như tắm khô, tắm ướt, chải xù, cắt lông tạo kiểu và cắt móng.',
					status: true,
					createdBy: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Dịch vụ xuất cảnh chó mèo',
					description:
						'PetCare có đội ngũ nhân viên giàu kinh nghiệm giúp chủ nuôi gửi thú cưng đi nước ngoài hay cùng đi du lịch.',
					status: true,
					createdBy: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Dịch vụ lưu chuồng',
					description:
						'Petcare áp dụng quy trình lưu giữ thú cưng khoa học, đảm bảo cho thú cưng nhà bạn sống trong môi trường an toàn và sạch sẽ.',
					status: true,
					createdBy: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Vận chuyển - Khám bệnh tại nhà',
					description:
						'Chúng tôi cung cấp dịch vụ khám chữa bệnh tại nhà và vận chuyển thú cưng từ nhà quý khách đến PetCare và ngược lại.',
					status: true,
					createdBy: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: 'Dịch vụ cấp cứu 24/7',
					description:
						'PetCare cung cấp dịch vụ cấp cứu 24/7, kể cả ngày lễ. Trường hợp cấp cứu sau 19h xin vui lòng liên hệ trước và mang thú cưng tới bệnh viện PetCare 1.',
					status: true,
					createdBy: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete('Services', null, {});
	},
};
