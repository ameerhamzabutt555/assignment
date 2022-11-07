'use strict';

module.exports = {
	async up(queryInterface, DataTypes) {
		await queryInterface.createTable('Tenant_Profile', {
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
		await queryInterface.dropTable('Tenant_Profile');
	}
};
