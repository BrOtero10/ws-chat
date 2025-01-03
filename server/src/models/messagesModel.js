const path = require('path');
const { v4: uuidv4 } = require('uuid');
const saveData = require('../utils/saveData');

const filePath = path.join(__dirname, '../data/messages.json');
let messagesData = require(filePath);

// Função para obter todas as mensagens
function getMessages() {
    return messagesData;
}

// Função para obter uma mensagem específica
function getMessage(id) {
    return messagesData.find(message => message.id === id);
}

function getMessagesByUsersId(fromId, toId) {
    return messagesData.filter(message => message.from === fromId && message.to === toId)
}

function getMessagesOfPersonalChat(userOneId, userTwoId) {
    const chatMessages = messagesData.filter(message => 
        (message.from === userOneId && message.to === userTwoId) || 
        (message.from === userTwoId && message.to === userOneId)
    )

    // Ordenar as mensagens por timestamp (ordem crescente)
    // chatMessages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

    return chatMessages
}

// Função para criar uma nova mensagem
function createMessage(newMessage) {
    if(newMessage.type) delete newMessage.type;
    
    newMessage.id = uuidv4(); // Gerar um ID único
    messagesData.push(newMessage);
    saveData(filePath, messagesData);
}

// Função para atualizar uma mensagem existente
function updateMessage(id, updatedMessage) {
    const index = messagesData.findIndex(message => message.id === id);
    if (index !== -1) {
        messagesData[index] = { ...messagesData[index], ...updatedMessage };
        saveData(filePath, messagesData);
    }
}

// Função para deletar uma mensagem
function deleteMessage(id) {
    const index = messagesData.findIndex(message => message.id === id);
    if (index !== -1) {
        messagesData.splice(index, 1);
        saveData(filePath, messagesData);
    }
}

module.exports = {
    getMessages,
    getMessage,
    getMessagesByUsersId,
    getMessagesOfPersonalChat,
    createMessage,
    updateMessage,
    deleteMessage
};