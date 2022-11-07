const tenantService = require('../services/tenantProfile.service');
// create Tenant Profile
const create = async (req, res) => {
	try {
		const createdTenant = await tenantService.create(req);
		if(createdTenant?.error) {
			return res.status(createdTenant.status).json({
				message: createdTenant.message
			});
		}
		return res.status(201).json({
			message: 'Tenant profile created',
			profileInfo: {...createdTenant.dataValues}
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message
		});
	}
};
// Find Tenant Profile with ID
const find = async (req, res) => {
	try {
		const tenant = await tenantService.find(req.params.id);
		if(tenant?.error) {
			return res.status(tenant.status).json({
				message: tenant.message
			});
		}
		return res.status(200).json({
			info: {tenant}
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message
		});
	}
};
// get All Tenant Profiles
const findAll = async (req, res) => {
	try {
		const tenant = await tenantService.findAll();
		if(tenant?.error) {
			return res.status(tenant.status).json({
				message: tenant.message
			});
		}
		return res.status(200).json({
			info: {tenant}
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message
		});
	}
};
// Update Tenant Profile with Profile ID
const update = async (req, res) => {
	try {
		const updateTenat = await tenantService.update(req.params.id, req);
		if(updateTenat?.error) {
			return res.status(updateTenat.status).json({
				message: updateTenat.message
			});
		}
		return res.status(200).json({
			message: 'Tenant profile updated successfully'
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message
		});
	}
};
// delete Tenant Profile with ID
const del = async (req, res) => {
	try {
		const delTenat = await tenantService.del(req.params.id);
		if(delTenat?.error) {
			return res.status(delTenat.status).json({
				message: delTenat.message
			});
		}
		return res.status(200).json({
			message: 'Delete successfully'
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message
		});
	}
};

// export all functions
module.exports = {
	create,
	find,
	findAll,
	update,
	del
};