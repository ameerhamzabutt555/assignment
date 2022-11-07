require('dotenv');
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('social', 'postgres', 'postgres', {
	host: 'postgres',
	dialect: 'postgres',
});

dbConnectionCheck();


async function dbConnectionCheck(){
	try {
		await sequelize.authenticate();
		console.log('Databse connection established successfully');
	} catch (error) {
		console.log('Connection failed', error);
	}
}

module.exports = sequelize;