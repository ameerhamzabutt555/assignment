const express = require('express');
const router = express.Router();
const tenantRouter = require('./tenantProfile.routes');
const userRouter = require('./userProfile.routes');

router.use('/tenant', tenantRouter);
router.use('/user', userRouter);

module.exports = router;