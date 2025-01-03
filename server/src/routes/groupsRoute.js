const express = require('express');
const router = express.Router();

const groupsControllers = require("../controllers/groupsController");

// Rota para obter todos os grupos
router.get('/groups', groupsControllers.getGroups);

// Rota para obter um grupo específico
router.get('/groups/:id', groupsControllers.getGroup);

// Rota para criar um novo grupo
router.post('/groups', groupsControllers.createGroup);

// Rota para atualizar um grupo existente
router.put('/groups/:id', groupsControllers.updateGroup);

// Rota para deletar um grupo
router.delete('/groups/:id', groupsControllers.deleteGroup);

module.exports = router;