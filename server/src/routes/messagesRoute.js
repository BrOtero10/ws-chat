const express = require('express');
const router = express.Router();

const messagesControllers = require("../controllers/messagesController");

// Rota para obter todas as mensagens
router.get('/messages', messagesControllers.getMessages);

// Rota para obter uma mensagem específica
router.get('/messages/:id', messagesControllers.getMessage);

// router.get('/messages/:fromId/:toId', messagesControllers.getMessagesByUsersId);

router.get('/messages/:userOneId/:userTwoId', messagesControllers.getMessagesOfPersonalChat);

// Rota para criar uma nova mensagem
router.post('/messages', messagesControllers.createMessage);

// Rota para atualizar uma mensagem existente
router.put('/messages/:id', messagesControllers.updateMessage);

// Rota para deletar uma mensagem
router.delete('/messages/:id', messagesControllers.deleteMessage);

module.exports = router;