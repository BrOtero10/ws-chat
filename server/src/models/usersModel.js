const path = require('path');
const { v4: uuidv4 } = require('uuid');
const saveData = require('../utils/saveData');

const filePath = path.join(__dirname, '../data/users.json');
let userData = require(filePath);

// Função para obter todos os usuários
function getUsers() {
    return userData;
}

// Função para obter um usuário específico
function getUser(id) {
    const user = userData.find(user => user.id === id);
    return user;
}

function getUserByUsername(username) {
    const foundUsers = userData.filter(user => user.username.includes(username));
    // for(user of foundUsers) {
    //     delete user.password;
    // }
    return foundUsers;
}

// Função para criar um novo usuário
function createUser(newUser) {
    newUser.id = uuidv4(); // Gerar um ID único
    userData.push(newUser);
    saveData(filePath, userData);
}

// Função para atualizar um usuário existente
function updateUser(id, updatedUser) {
    const index = userData.findIndex(user => user.id === id);
    if (index !== -1) {
        userData[index] = { ...userData[index], ...updatedUser };
        saveData(filePath, userData);
    }
}

// Função para deletar um usuário
function deleteUser(id) {
    const index = userData.findIndex(user => user.id === id);
    if (index !== -1) {
        userData.splice(index, 1);
        saveData(filePath, userData);
    }
}

module.exports = {
    getUsers,
    getUser,
    getUserByUsername,
    createUser,
    updateUser,
    deleteUser
};