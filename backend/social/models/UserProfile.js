const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const UserProfile = sequelize.define('UserProfile', {
	user_id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false  
	},
	first_name: {
		type: DataTypes.STRING,
		allowNull: false
	},  
	last_name: {
		type: DataTypes.JSON,
		allowNull: false
	},  
	department: {
		type: DataTypes.STRING,
		allowNull: false
	},  
	designation: {
		type: DataTypes.STRING,
		allowNull: false
	},  
	image_url: {
		type: DataTypes.STRING,
		allowNull: false
	},  
	city: {
		type: DataTypes.STRING,
		allowNull: false
	},  
	country: {
		type: DataTypes.STRING,
		allowNull: false
	},  
	bio: {
		type: DataTypes.STRING,
		allowNull: false
	},  
	social_links: {
		type: DataTypes.JSON,
		allowNull: true
	},
	tenant_id: {
		type: DataTypes.BIGINT
	},
	employee_id: {
		type: DataTypes.BIGINT,
		allowNull: true
	}  
}, {
	tableName: 'User_Profile'
});

module.exports = UserProfile;