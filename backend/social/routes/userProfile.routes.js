const express = require('express');
const { create, find, findAll, update, del } = require('../controllers/userProfile.controller');
const router = express.Router();

router.post('/', create);
router.get('/:id', find);
router.get('/', findAll);
router.patch('/:id', update);
router.delete('/:id', del);

module.exports = router;