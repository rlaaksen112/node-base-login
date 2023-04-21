"use strict";
const express = require('express');
const router = express.Router();

const ctrl = require('./ctrl');

router.get('/',ctrl.output.home);

router.get('/login',ctrl.output.login);
router.post('/login',ctrl.process.login);
router.get('/register',ctrl.register);

module.exports = router;