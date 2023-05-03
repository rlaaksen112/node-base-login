"use strict";
const express = require('express');
const router = express.Router();

const ctrl = require('./ctrl');

router.get('/',ctrl.output.home);

router.get('/login',ctrl.output.login);     /* login get 2*/
router.post('/login',ctrl.process.login);   /* login post 1*/ 

module.exports = router;