const fs = require('fs');
const path = require('path');
const saveData = require('../utils/saveData');

const filePath = path.join(__dirname, '../data/friends.json');
let friendsData = require(filePath);

// Função para obter todos os amigos
function getFriends() {
    return friendsData;
}

// Função para obter os amigos de um usuário específico
function getUserFriends(userId) {
    const user = friendsData.find(friend => friend.user === userId);
    return user ? user.friends : [];
}

// Função para adicionar um novo usuário com lista de amigos
function createUserFriends(newUserFriends) {
    friendsData.push(newUserFriends);
    saveData(filePath, friendsData);
}

// Função para atualizar a lista de amigos de um usuário
function updateUserFriends(userId, updatedFriends) {
    const index = friendsData.findIndex(friend => friend.user === userId);
    if (index !== -1) {
        friendsData[index].friends = updatedFriends;
        saveData(filePath, friendsData);
    }
}

// Função para deletar um usuário e sua lista de amigos
function deleteUserFriends(userId) {
    const index = friendsData.findIndex(friend => friend.user === userId);
    if (index !== -1) {
        friendsData.splice(index, 1);
        saveData(filePath, friendsData);
    }
}

// Função para adicionar um amigo à lista de um usuário
function addFriend(userId, friendId) {
    const user = friendsData.find(friend => friend.user === userId);
    if (user && !user.friends.includes(friendId)) {
        user.friends.push(friendId);
        saveData(filePath, friendsData);
    }
}

// Função para remover um amigo da lista de um usuário
function removeFriend(userId, friendId) {
    const user = friendsData.find(friend => friend.user === userId);
    if (user) {
        user.friends = user.friends.filter(id => id !== friendId);
        saveData(filePath, friendsData);
    }
}

module.exports = {
    getFriends,
    getUserFriends,
    createUserFriends,
    updateUserFriends,
    deleteUserFriends,
    addFriend,
    removeFriend
};