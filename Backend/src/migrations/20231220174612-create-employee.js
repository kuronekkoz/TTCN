'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Employees', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			fullName: {
				type: Sequelize.STRING,
			},
			description: {
				type: Sequelize.STRING,
			},
			position: {
				type: Sequelize.STRING,
			},
			image: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			createdBy: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			updatedBy: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Employees');
	},
};
