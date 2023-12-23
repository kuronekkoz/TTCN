'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Employee extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Employee.belongsTo(models.Account, { as: 'emloyeesCreatedBy', foreignKey: 'createdBy' });
			Employee.belongsTo(models.Account, { as: 'emloyeesUpdatedBy', foreignKey: 'updatedBy' });
		}
	}
	Employee.init(
		{
			fullName: DataTypes.STRING,
			description: DataTypes.STRING,
			position: DataTypes.STRING,
			image: DataTypes.STRING,
			createdBy: DataTypes.INTEGER,
			updatedBy: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Employee',
		},
	);
	return Employee;
};
