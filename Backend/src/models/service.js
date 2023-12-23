'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Service extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Service.hasMany(models.Appointment, { foreignKey: 'servicedId', targetKey: 'id' });
			Service.belongsTo(models.Account, { as: 'servicesCreatedBy', foreignKey: 'createdBy' });
			Service.belongsTo(models.Account, { as: 'servicesUpdatedBy', foreignKey: 'updatedBy' });
		}
	}
	Service.init(
		{
			name: DataTypes.STRING,
			description: DataTypes.STRING,
			content: DataTypes.STRING,
			status: DataTypes.BOOLEAN,
			createdBy: DataTypes.INTEGER,
			updatedBy: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: 'Service',
		},
	);
	return Service;
};
