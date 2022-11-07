const TenantProfile = require('../models/TenantProfile');
const UserProfile = require('../models/UserProfile');

const create = async (req) => {
	const tenant = req.body; 
	const createdTenant = await TenantProfile.create(tenant);
	return createdTenant;
};

/**
 * the below function is used to insert data in databse
 * for kafka
 */
const kcreate = async (req) => {
	const createdTenant = await TenantProfile.create(req);
	return createdTenant;
};

const find = async (id) => {
	const tenant = await TenantProfile.findByPk(id, {include: UserProfile});
	if(tenant === null) {
		return {status:404,message:'No record found',error:true};
	} else {
		return tenant;
	}
};

const findAll = async () => {
	const tenant = await TenantProfile.findAll({include: UserProfile});
	if(tenant === null) {
		return {status:404,message:'No record found',error:true};
	} else {
		return tenant;
	}
};

const update = async (id, req) => {
	const findtenant = await TenantProfile.findByPk(id);
	if(findtenant === null) {
		return {status:404,message:'No record found',error:true};
	} else {
		const updateTenant = await TenantProfile.update(req.body, {where: {id: id}});
		console.log(updateTenant);
		return true;    
	}
};

const del = async (id) => {
	const findtenant = await TenantProfile.findByPk(id);
	if(findtenant === null) {
		return {status:404,message:'No record found',error:true};
	} else {
		await TenantProfile.destroy({where: {id: id}});
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