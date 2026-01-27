// BACKEND/routes/Admin/adminAuthRoutes.js
const express = require('express');
const { adminLogin } = require('../../controllers/Admin/adminAuthController');

const router = express.Router();

router.post('/login', adminLogin);

module.exports = router;
