const express = require('express');
const router = express.Router();
const verifyJWT = require("../middlewares/auth");

const friendsControllers = require("../controllers/friendsController");

router.get('/friends', verifyJWT, friendsControllers.getUserFriends);
router.get('/friendship_solicitations', verifyJWT, friendsControllers.getFriendshipSolicitations);
router.get('/friendship_solicitations_from_user', verifyJWT, friendsControllers.getFriendshipSolicitationsFromUser);
router.post('/friends', verifyJWT, friendsControllers.createFriendshipSolicitation);
router.put('/friends', verifyJWT, friendsControllers.acceptFriendship);
router.delete('/friends/:friendId', verifyJWT, friendsControllers.deleteFriendship);

module.exports = router;