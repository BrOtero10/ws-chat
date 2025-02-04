const WebSocket = require('ws');
const messagesModel = require('../models/messagesModel');

const startWebSocketServer = (server) => {
    const webSocketServer = new WebSocket.Server({ server });
    const clients = new Map();

    webSocketServer.on('connection', (socket) => {
        console.log('➕ - Novo cliente conectado');
        console.log('Clientes conectados: ', webSocketServer.clients.size);

        socket.on('message', (message) => {
            const data = JSON.parse(message);
            
            if (data.type === 'identify') {
                clients.set(socket, data.userId);
                console.log(`Usuário identificado: ${data.userId}`);
            } 
            else if(data.type === 'message') {
                data.sender = clients.get(socket);
                sendMessageToUser(data.recipient, JSON.stringify(data));
                messagesModel.createMessage(data);
            }
            else {
                console.log('Recebido: ', message.toString());
            }
        });

        socket.on('close', () => {
            clients.delete(socket);
            console.log('➖ - Cliente desconectado');
            console.log('Clientes conectados: ', webSocketServer.clients.size);
        });
    });

    // Função para enviar mensagem para um usuário específico
    const sendMessageToUser = (userId, message) => {
        for (const [client, id] of clients.entries()) {
            if (id == userId) {
                client.send(message);
                break;
            }
        }
    };
};

module.exports = { startWebSocketServer };