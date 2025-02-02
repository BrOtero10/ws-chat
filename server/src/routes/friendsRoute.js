const express = require('express');
const router = express.Router();
const verifyJWT = require("../middlewares/auth");

const friendsControllers = require("../controllers/friendsController");


router.get('/friends', verifyJWT, friendsControllers.getUserFriends);
router.post('/friends', verifyJWT, friendsControllers.createFriendshipSolicitation);
router.put('/friends', verifyJWT, friendsControllers.acceptFriendship);
router.delete('/friends/:friendId', verifyJWT, friendsControllers.deleteFriendship);

module.exports = router;