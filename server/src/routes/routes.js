const express = require('express');
const router = express.Router();

// Users
const usersRoute = require('./usersRoute');
router.use('/', usersRoute);

// Messages
const messagesRoute = require('./messagesRoute');
router.use('/', messagesRoute);

// Groups
const groupsRoute = require('./groupsRoute');
router.use('/', groupsRoute);

// Friends
const friendsRoute = require('./friendsRoute');
router.use('/', friendsRoute);

// Friend Solicitations
const friendSolicitationsRoute = require('./friendSolicitationsRoute');
router.use('/', friendSolicitationsRoute);

module.exports = router; 