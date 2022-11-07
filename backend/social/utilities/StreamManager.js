const tenantService = require('../services/tenantProfile.service');
const userService = require('../services/userProfile.service');
const processMessage = async (kafkaMessage) => {

	//Start working here
	console.log('This is Kafka message =============>>>>>>>>>>', kafkaMessage);
	if (kafkaMessage.event_name === 'tenant_created') {
		let temp = kafkaMessage.properties;
		temp.address = {current_address: temp.address};
		temp.tenant_name = temp.name;
		try {
			await tenantService.kcreate(temp);
			console.log('Tenant created successfully');
		} catch (error) {
			console.log('Some error occured', error);
		}
	} else if (kafkaMessage.event_name === 'user_created') {
		try {
			await userService.kcreate(kafkaMessage.properties);
			console.log('User created successfully');
		} catch (error) {
			console.log('Some error occured', error);
		}	
	}

};

module.exports = { processMessage };
