const express = require('express');
const router = express.Router();

const usersController = require("../controllers/usersController");

router.get('/users', usersController.getUsers);
router.get('/user/:id', usersController.getUser);
router.post('/user', usersController.createUser);
router.put('/user/:id', usersController.updateUser);
router.delete('/user/:id', usersController.deleteUser);

module.exports = router;