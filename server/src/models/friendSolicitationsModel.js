const fs = require('fs');
const path = require('path');
const saveData = require('../utils/saveData');
const friendsModel = require('./friendsModel');

const filePath = path.join(__dirname, '../data/friendSolicitations.json');
let friendSolicitationsData = require(filePath);

// Função para obter todas as solicitações de amizade
function getFriendSolicitationsToUser(to) {
    return friendSolicitationsData.filter(solicitation => solicitation.to === to);
}

// Função para obter todas as solicitações de amizade
function getFriendSolicitationsFromUser(from) {
    return friendSolicitationsData.filter(solicitation => solicitation.from === from);
}

// Função para obter uma solicitação de amizade específica
function getFriendSolicitation(from, to) {
    return friendSolicitationsData.find(solicitation => solicitation.from === from && solicitation.to === to);
}

// Função para criar uma nova solicitação de amizade
function createFriendSolicitation(newSolicitation) {
    friendSolicitationsData.push(newSolicitation);
    saveData(filePath, friendSolicitationsData);
}

// Função para deletar uma solicitação de amizade
function deleteFriendSolicitation(from, to) {
    const index = friendSolicitationsData.findIndex(solicitation => solicitation.from === from && solicitation.to === to);
    if (index !== -1) {
        friendSolicitationsData.splice(index, 1);
        saveData(filePath, friendSolicitationsData);
    }
}

// Função para aceitar uma solicitação de amizade
function acceptFriendSolicitation(from, to) {
    friendsModel.addFriend(from, to);
    friendsModel.addFriend(to, from);
    deleteFriendSolicitation(from, to);
}

// Função para recusar uma solicitação de amizade
function rejectFriendSolicitation(from, to) {
    deleteFriendSolicitation(from, to);
}

module.exports = {
    getFriendSolicitationsToUser,
    getFriendSolicitationsFromUser,
    getFriendSolicitation,
    createFriendSolicitation,
    deleteFriendSolicitation,
    acceptFriendSolicitation,
    rejectFriendSolicitation
};