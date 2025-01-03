const express = require('express');
const router = express.Router();

const friendsControllers = require("../controllers/friendsController");

// Rota para obter todos os amigos
router.get('/friends', friendsControllers.getFriends);

// Rota para obter os amigos de um usuário específico
router.get('/friends/:userId', friendsControllers.getUserFriends);

// Rota para criar um novo usuário com lista de amigos
router.post('/friends', friendsControllers.createUserFriends);

// Rota para atualizar a lista de amigos de um usuário
router.put('/friends/:userId', friendsControllers.updateUserFriends);

// Rota para deletar um usuário e sua lista de amigos
router.delete('/friends/:userId', friendsControllers.deleteUserFriends);

// Rota para adicionar um amigo à lista de um usuário
router.post('/friends/:userId/add', friendsControllers.addFriend);

// Rota para remover um amigo da lista de um usuário
router.post('/friends/:userId/remove', friendsControllers.removeFriend);

module.exports = router;