const express = require('express');
const router = express.Router();
const verifyJWT = require('../middlewares/auth');

const messagesControllers = require("../controllers/messagesController");

router.get('/message/:sender/:recipient/:timestamp', verifyJWT, messagesControllers.getMessage);
router.get('/chat-messages/:friendId', verifyJWT, messagesControllers.getChatMessages);
router.post('/message', verifyJWT, messagesControllers.createMessage);
router.delete('/message/:recipient/:timestamp', verifyJWT, messagesControllers.deleteMessage);

module.exports = router;