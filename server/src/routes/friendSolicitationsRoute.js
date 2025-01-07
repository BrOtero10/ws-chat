const express = require('express');
const router = express.Router();

const friendSolicitationsControllers = require("../controllers/friendSolicitationsController");

// Rota para obter todas as solicitações de amizade
router.get('/friend-solicitations/to/:to', friendSolicitationsControllers.getFriendSolicitationsToUser);

router.get('/friend-solicitations/from/:from', friendSolicitationsControllers.getFriendSolicitationsFromUser);

// Rota para obter uma solicitação de amizade específica
router.get('/friend-solicitations/:from/:to', friendSolicitationsControllers.getFriendSolicitation);

// Rota para criar uma nova solicitação de amizade
router.post('/friend-solicitations', friendSolicitationsControllers.createFriendSolicitation);

// Rota para deletar uma solicitação de amizade
router.delete('/friend-solicitations/:from/:to', friendSolicitationsControllers.deleteFriendSolicitation);

// Rota para aceitar uma solicitação de amizade
router.post('/friend-solicitations/:from/:to/accept', friendSolicitationsControllers.acceptFriendSolicitation);

// Rota para recusar uma solicitação de amizade
router.post('/friend-solicitations/:from/:to/reject', friendSolicitationsControllers.rejectFriendSolicitation);

module.exports = router;