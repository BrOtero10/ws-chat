const express = require('express');
const router = express.Router();
const verifyJWT = require('../middlewares/auth');

const usersController = require("../controllers/usersController");

router.get('/users', verifyJWT, usersController.getUsers);
router.get('/user/:id', verifyJWT, usersController.getUser);
router.get('/user/username/:username', verifyJWT, usersController.getUserByUserName);
router.post('/login', usersController.login);
router.post('/user', usersController.createUser);
router.put('/user', verifyJWT, usersController.updateUser);
router.delete('/user', verifyJWT, usersController.deleteUser);

module.exports = router;