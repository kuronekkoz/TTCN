'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Appointments', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			fullName: {
				type: Sequelize.STRING,
			},
			address: {
				type: Sequelize.STRING,
			},
			phoneNumber: {
				type: Sequelize.STRING,
			},
			email: {
				type: Sequelize.STRING,
			},
			generic: {
				type: Sequelize.STRING,
			},
			appointmentTime: {
				type: Sequelize.DATE,
			},
			serviceId: {
				type: Sequelize.INTEGER,
			},
			status: {
				type: Sequelize.BOOLEAN,
			},
			isComming: {
				type: Sequelize.BOOLEAN,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedBy: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Appointments');
	},
};
