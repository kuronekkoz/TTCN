'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Account extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Account.hasMany(models.Appointment, { foreignKey: 'updatedBy', targetKey: 'id' });
			Account.hasMany(models.Employee, { foreignKey: 'createdBy', targetKey: 'id' });
			Account.hasMany(models.Employee, { foreignKey: 'updatedBy', targetKey: 'id' });
			Account.hasMany(models.Service, { foreignKey: 'createdBy', targetKey: 'id' });
			Account.hasMany(models.Service, { foreignKey: 'updatedBy', targetKey: 'id' });
		}
	}
	Account.init(
		{
			username: DataTypes.STRING,
			password: DataTypes.STRING,
			role: DataTypes.INTEGER,
			status: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: 'Account',
		},
	);
	return Account;
};
