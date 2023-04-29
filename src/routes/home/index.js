"use strict";
const express = require('express');
const router = express.Router();

const ctrl = require('./ctrl');

router.get('/',ctrl.output.home);

router.get('/login',ctrl.output.login);     /* login get */
router.post('/login',ctrl.process.login);   /* login post */

module.exports = router;