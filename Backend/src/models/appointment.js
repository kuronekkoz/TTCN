'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Appointment extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Appointment.belongsTo(models.Account, { as: 'appointments', foreignKey: 'createdBy' });
			Appointment.belongsTo(models.Service, { as: 'services', foreignKey: 'serviceId' });
		}
	}
	Appointment.init(
		{
			fullName: DataTypes.STRING,
			address: DataTypes.STRING,
			phoneNumber: DataTypes.STRING,
			email: DataTypes.STRING,
			generic: DataTypes.STRING,
			appointmentTime: DataTypes.DATE,
			serviceId: DataTypes.INTEGER,
			status: DataTypes.BOOLEAN,
			isComming: DataTypes.BOOLEAN,
			updatedBy: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Appointment',
		},
	);
	return Appointment;
};
