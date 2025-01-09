const express = require('express');
const router = express.Router();

const friendsControllers = require("../controllers/friendsController");


router.get('/friends/:userId', friendsControllers.getUserFriends);
router.post('/friends', friendsControllers.createFriendshipSolicitation);
router.put('/friends', friendsControllers.acceptFriendship);
router.delete('/friends/:userId/:friendId', friendsControllers.deleteFriendship);

module.exports = router;