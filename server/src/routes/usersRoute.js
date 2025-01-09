const express = require('express');
const router = express.Router();

const usersController = require("../controllers/usersController");

router.get('/users', usersController.getUsers);
router.get('/user/:id', usersController.getUser);
router.get('/user/username/:username', usersController.getUserByUserName);
router.post('/user', usersController.createUser);
router.put('/user', usersController.updateUser);
router.delete('/user/:id', usersController.deleteUser);

module.exports = router;