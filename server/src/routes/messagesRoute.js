const express = require('express');
const router = express.Router();

const messagesControllers = require("../controllers/messagesController");

router.get('/message/:sender/:recipient/:timestamp', messagesControllers.getMessage);
router.get('/chat-messages/:sender/:recipient', messagesControllers.getChatMessages);
router.post('/message', messagesControllers.createMessage);
router.delete('/messages/:sender/:recipient/:timestamp', messagesControllers.deleteMessage);

module.exports = router;