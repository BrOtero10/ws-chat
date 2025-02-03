const express = require('express');
const router = express.Router();

// Users
const usersRoute = require('./usersRoute');
router.use('/', usersRoute);

// Messages
const messagesRoute = require('./messagesRoute');
router.use('/', messagesRoute);

// Friends
const friendsRoute = require('./friendsRoute');
router.use('/', friendsRoute);

module.exports = router; 