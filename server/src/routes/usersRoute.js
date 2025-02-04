const express = require('express');
const router = express.Router();
const verifyJWT = require('../middlewares/auth');

const usersController = require("../controllers/usersController");

router.get('/users', usersController.getUsers);
router.get('/user/:id', usersController.getUser);
router.get('/user_by_token', verifyJWT, usersController.getUserByToken);
router.get('/user/username/:username', usersController.getUserByUserName);
router.post('/login', usersController.login);
router.post('/user', usersController.createUser);
router.put('/user', verifyJWT, usersController.updateUser);
router.delete('/user', verifyJWT, usersController.deleteUser);

module.exports = router;