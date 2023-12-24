'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   fullName: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		await queryInterface.bulkInsert(
			'Employees',
			[
				{
					fullName: 'Ths. BSTY HUỲNH THỊ THANH NGỌC ',
					description:
						'Bác sĩ Thanh Ngọc tốt nghiệp Đại học Nông Lâm Tp.HCM năm 1989 và 2003. Sau đó cô thực hành thú y thú nhỏ tại phòng mạch riêng từ 1996 – 2005. Đến ngày 16/06/2005, bác sĩ Ngọc chính thức thành lập Bệnh viện thú y Petcare tại 124 A đường Xuân Thuỷ, phường Thảo Điền, Q.2, Tp HCM, trở thành bệnh viện thú y tư nhân đầu tiên tại Việt Nam.',
					image: 'https://petcare.vn/wp-content/uploads/2018/07/bs-Ngoc.jpg',
					createdBy: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					fullName: 'NGUYỄN THỊ QUỲNH HOA',
					description:
						'Bác sĩ Hoa tốt nghiệp Đại học Nông Lâm Tp. HCM khóa 1997-2002.  Chị trở thành bác sĩ thực hành thú y thú nhỏ tại phòng mạch Xóm Đất (tiền thân của PetCare) từ khi mới ra trường và gắn bó với Bệnh viện Petcare đến nay.',
					image: 'https://petcare.vn/wp-content/uploads/2018/07/bs-Hoa.jpg',
					createdBy: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					fullName: 'NGUYỄN BÁ PHÚ',
					description:
						'Bác sĩ Phú tốt nghiệp ngành bác sĩ thú y trường Đại học Tây Nguyên năm 2006 và  ngành Quản trị kinh doanh trường ĐH Kinh tế TP.HCM năm 2011. Anh bắt đầu làm việc tại Bệnh viện PetCare từ năm 2006  đến nay.',
					image: 'https://petcare.vn/wp-content/uploads/2016/06/bs_phu.jpg',
					createdBy: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					fullName: 'MAI NGỌC HƯỚNG DƯƠNG',
					description:
						'Bác sĩ Hướng Dương tốt nghiệp ngành bác sĩ thú y trường Đại học Nông Lâm Tp. HCM khóa 2006 – 2011. Chị trở thành bác sĩ thực hành thú y thú nhỏ tại Bệnh viện Petcare từ năm 2012 đến nay.',
					image: 'https://petcare.vn/wp-content/uploads/2016/06/cduong1-1.jpg',
					createdBy: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					fullName: 'ĐẶNG THỊ KIM CƯƠNG',
					description:
						'Bác sĩ Cương học ngành bác sĩ thú y tại trường Đại học Đại học Nông Lâm Tp. HCM khóa 2010-2015. Sau đó, chị trở thành bác sĩ thực hành thú y thú nhỏ tại Bệnh viện Petcare từ tháng 12/2016 đến nay.',
					image: 'https://petcare.vn/wp-content/uploads/2016/06/bskimcuong.jpg',
					createdBy: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					fullName: 'NGUYỄN HỒNG NGỌC',
					description:
						'Hồng Ngọc học ngành bác sĩ thú y trường Đại học Nông Lâm Tp. HCM khóa 2001-2006. Chị là thành viên tâm đắc tại Bệnh viện Petcare từ năm 2006 đến nay.',
					image: 'https://petcare.vn/wp-content/uploads/2016/06/bs5.jpg',
					createdBy: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					fullName: 'NGUYỄN VIỆT VƯƠNG',
					description:
						'Bác sĩ Vương học ngành bác sĩ thú y tại trường Đại học Đại học Nông Lâm Tp. HCM khóa 2012-2018. Sau đó, anh trở thành bác sĩ thực hành thú y thú nhỏ tại Bệnh viện Petcare từ 2021 đến nay.',
					image: 'https://petcare.vn/wp-content/uploads/2022/07/vuong-pc1.jpg',
					createdBy: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					fullName: 'LƯƠNG QUỐC ĐẠT',
					description:
						'Bác sĩ Đạt tốt nghiệp trường Đại học Nông Lâm Tp. HCM khóa 2014-2019. Sau đó, anh trở thành bác sĩ thực hành thú y thú nhỏ tại Bệnh viện Petcare từ 2021 đến nay.',
					image: 'https://petcare.vn/wp-content/uploads/2022/07/dat-pc2.jpg',
					createdBy: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					fullName: 'NGUYỄN THỊ MINH THUÝ',
					description:
						'Bác sĩ Minh Thúy học ngành bác sĩ thú y tại trường Đại học Đại học Nông Lâm Tp. HCM khóa 2012-2018. Sau đó, chị trở thành bác sĩ thực hành thú y thú nhỏ tại Bệnh viện Petcare.',
					image: 'https://petcare.vn/wp-content/uploads/2023/06/Screenshot-2023-06-11-at-10.34.37.png',
					createdBy: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					fullName: 'PHẠM HOÀNG LỢI',
					description:
						'Bác sĩ Lợi học ngành bác sĩ thú y tại trường Đại học Đại học Nông Lâm Bắc Giang khóa 2012-2018. Sau đó, anh trở thành bác sĩ thực hành thú y thú nhỏ tại Bệnh viện Petcare từ 2021 đến nay.',
					image: 'https://petcare.vn/wp-content/uploads/2022/07/loi-pc4.jpg',
					createdBy: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					fullName: 'VÕ VĂN MIN',
					description:
						'Bác sĩ Min học ngành bác sĩ thú y tại trường Đại học Đại học Nông Lâm Tp. HCM khóa 2016-2021. Sau đó, anh trở thành bác sĩ thực hành thú y thú nhỏ tại Bệnh viện Petcare.',
					image: 'https://petcare.vn/wp-content/uploads/2023/06/DSC1885-Edit-scaled.jpg',
					createdBy: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					fullName: 'NGUYỄN VIẾT PHI',
					description:
						'Bác sĩ Phi tốt nghiệp trường Trung cấp Nông Nghiệp Tp. HCM khóa 2016-2018. Sau đó, anh trở thành bác sĩ thực hành thú y thú nhỏ tại Bệnh viện Petcare từ 2019 đến nay.',
					image: 'https://petcare.vn/wp-content/uploads/2022/07/phi-pc4.jpg',
					createdBy: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					fullName: 'NGUYỄN TRẦN KIM NGÂN',
					description:
						'Bác sĩ Ngân học ngành bác sĩ thú y tại trường Trung cấp Kỹ Thuật Nông Nghiệp Tp. HCM khóa 2017-2019. Sau đó, chị trở thành bác sĩ thực hành thú y thú nhỏ tại Bệnh viện Petcare từ 2021 đến nay.',
					image: 'https://petcare.vn/wp-content/uploads/2022/07/ngan-pc3.jpg',
					createdBy: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					fullName: 'NGUYỄN THỊ MY QUỲNH',
					description:
						'Bác sĩ My Quỳnh tốt nghiệp ngành bác sĩ thú y tại trường Đại Học Công Nghệ Tp. HCM khóa 2017-2021.',
					image: 'https://petcare.vn/wp-content/uploads/2023/06/untitled-5-scaled.jpg',
					createdBy: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					fullName: 'ĐINH THANH NGUYÊN',
					description:
						'Bác sĩ Thanh Nguyên học ngành bác sĩ thú y tại trường Đại học Đại học Nông Lâm Tp. HCM khóa 2017-2022. Sau đó, anh trở thành bác sĩ thực hành thú y thú nhỏ tại Bệnh viện Petcare.',
					image: 'https://petcare.vn/wp-content/uploads/2023/06/DSC1723-Edit.jpg',
					createdBy: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					fullName: 'VÕ THANH THƯ',
					description: 'Trợ lý bác sĩ',
					image: 'https://petcare.vn/wp-content/uploads/2023/06/untitled-28.jpg',
					createdBy: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					fullName: 'MAI THUÝ NGỌC',
					description:
						'Chị Thúy Ngọc đã tôt nghiệp cap đẳng thú y tại trường Đại học Cần Thơ khóa 2013-2016. Hiện nay chị đang phụ trách tiếp tân, chăm sóc khách hàng tại Bệnh viện Petcare',
					image: 'https://petcare.vn/wp-content/uploads/2023/06/untitled-9-scaled.jpg',
					createdBy: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					fullName: 'PHAN THỊ KIM CÚC',
					description:
						'Chị Kim Cúc hiện đang là nhân viên kế toán của PetCare. Chị đã làm việc tại Bệnh Viện Thú Y Petcare từ tháng 11/2019 đến nay',
					image:
						'https://petcare.vn/wp-content/uploads/2020/01/IMG-9263fd2580ccef99e8e5445e8d90ea4d-V-e1577981422137.jpg',
					createdBy: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					fullName: 'VÕ THỊ THUẬN HÒA',
					description:
						'Chị Thuận Hòa hiện đang là nhân viên kế toán của PetCare. Chị đã làm việc tại Bệnh Viện Thú Y Petcare từ tháng 05/2020 đến nay.',
					image: 'https://petcare.vn/wp-content/uploads/2022/07/hoa-kt-e1656916739885.jpg',
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
		await queryInterface.bulkDelete('Employees', null, {});
	},
};
