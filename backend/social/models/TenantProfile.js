const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const UserProfile = require('./UserProfile');
const TenantProfile = sequelize.define('TenantProfile', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false  
	},
	tenant_name: {
		type: DataTypes.STRING,
		allowNull: false
	},  
	address: {
		type: DataTypes.JSON,
		allowNull: false
	},  
	city: {
		type: DataTypes.STRING,
		allowNull: false
	},  
	state: {
		type: DataTypes.STRING,
		allowNull: false
	},  
	country: {
		type: DataTypes.STRING,
		allowNull: false
	},  
	zip_code: {
		type: DataTypes.STRING,
		allowNull: false
	},  
	phone: {
		type: DataTypes.STRING,
		allowNull: false
	},  
	web_url: {
		type: DataTypes.STRING,
		allowNull: true
	},  
}, {
	tableName: 'Tenant_Profile'
});

TenantProfile.hasMany(UserProfile, {
	foreignKey: 'tenant_id',
	sourceKey: 'id',
	onDelete: 'CASCADE'
});

module.exports = TenantProfile;