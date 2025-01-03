const path = require('path');
const { v4: uuidv4 } = require('uuid');
const saveData = require('../utils/saveData');

const filePath = path.join(__dirname, '../data/groups.json');
let groupsData = require(filePath);

// Função para obter todos os grupos
function getGroups() {
    return groupsData;
}

// Função para obter um grupo específico
function getGroup(id) {
    return groupsData.find(group => group.id === id);
}

// Função para criar um novo grupo
function createGroup(newGroup) {
    newGroup.id = uuidv4(); // Gerar um ID único
    groupsData.push(newGroup);
    saveData(filePath, groupsData);
}

// Função para atualizar um grupo existente
function updateGroup(id, updatedGroup) {
    const index = groupsData.findIndex(group => group.id === id);
    if (index !== -1) {
        groupsData[index] = { ...groupsData[index], ...updatedGroup };
        saveData(filePath, groupsData);
    }
}

// Função para deletar um grupo
function deleteGroup(id) {
    const index = groupsData.findIndex(group => group.id === id);
    if (index !== -1) {
        groupsData.splice(index, 1);
        saveData(filePath, groupsData);
    }
}

module.exports = {
    getGroups,
    getGroup,
    createGroup,
    updateGroup,
    deleteGroup
};