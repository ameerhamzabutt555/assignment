'use strict';

module.exports = {
	async up(queryInterface, DataTypes) {
		await queryInterface.createTable('User_Profile', {
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
				type: DataTypes.BIGINT,
				references: {
					model: 'Tenant_Profile',
					key: 'id',
				},
				onDelete: 'CASCADE'
			},
			employee_id: {
				type: DataTypes.BIGINT,
				allowNull: true
			},
			createdAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: DataTypes.DATE,
			},
		});
	},

	async down(queryInterface) {
		await queryInterface.dropTable('User_Profile');
	}
};
