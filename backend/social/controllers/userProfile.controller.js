const userService = require('../services/userProfile.service');

// create User Profile
const create = async (req, res) => {
	try {
		const createdUser = await userService.create(req);
		if(createdUser?.error) {
			return res.status(createdUser.status).json({
				message: createdUser.message
			});
		}
		return res.status(201).json({
			message: 'User profile created',
			profileInfo: {...createdUser.dataValues}
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message
		});
	}
};

// Find User Profile with ID
const find = async (req, res) => {
	try {
		const user = await userService.find(req.params.id);
		
		if(user?.error) {
			return res.status(user.status).json({
				message: user.message
			});
		}
		return res.status(200).json({
			info: {user}
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message
		});
	}
};

// get All User Profiles
const findAll = async (req, res) => {
	try {
		const user = await userService.findAll();
		if(user?.error) {
			return res.status(user.status).json({
				message: user.message
			});
		}
		return res.status(200).json({
			info: {user}
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message
		});
	}
};

// Update User Profile with Profile ID
const update = async (req, res) => {
	try {
		const updateUser = await userService.update(req.params.id, req);
		if(updateUser?.error) {
			return res.status(updateUser.status).json({
				message: updateUser.message
			});
		}
		return res.status(200).json({
			message: 'User profile updated successfully'
		});
	} catch (error) {
		return res.status(500).json({
			message: error.message
		});
	}
};

// delete User Profile with ID
const del = async (req, res) => {
	try {
		const delUser = await userService.del(req.params.id);
		if(delUser?.error) {
			return res.status(delUser.status).json({
				message: delUser.message
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