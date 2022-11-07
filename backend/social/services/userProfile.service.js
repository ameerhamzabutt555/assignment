const UserProfile = require('../models/UserProfile');


const create = async (req) => {
	const userProfile = req.body;
	const createdUserProfile = await UserProfile.create(userProfile);
	return createdUserProfile;
};

/**
 * the below function is used to insert data in databse
 * for kafka
 */
const kcreate = async (req) => {
	const createdUserProfile = await UserProfile.create(req);
	return createdUserProfile;
};

const find = async (id) => {
	const userProfile = await UserProfile.findByPk(id);
	if(userProfile === null) {
		return {status:404,message:'No record found',error:true};
	} else {
		return userProfile;
	}
};

const findAll = async () => {
	const userProfile = await UserProfile.findAll();
	if(userProfile === null) {
		return {status:404,message:'No record found',error:true};
	} else {
		return userProfile;
	}
};

const update = async (id, req) => {
	const finduser = await UserProfile.findByPk(id);
	if(finduser === null) {
		return {status:404,message:'No record found',error:true};
	} else {
		const updateUser = await UserProfile.update(req.body, {where: {id: id}});
		console.log(updateUser);
		return true;    
	}
};

const del = async (id) => {
	const findUser = await UserProfile.findByPk(id);
	if(findUser === null) {
		return {status:404,message:'No record found',error:true};
	} else {
		await UserProfile.destroy({where: {id: id}});
		return true;    
	}
};


module.exports = {
	create,
	find,
	findAll,
	update,
	del,
	kcreate
};