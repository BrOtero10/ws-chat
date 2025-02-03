require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { startWebSocketServer } = require("./controllers/webSocketController");

const app = express();
app.use(cors({
    // origin: `http://localhost:5173`,
    // methods: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    // credentials: true
}));

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

const Routes = require('./routes/routes');
app.use('/', Routes);

const server = app.listen(2025, () => {
    console.log(`Server rodando em http://localhost:2025`);
});

// Criando o servidor WebSocket
startWebSocketServer(server);
console.log('WebSocket criado em ws://localhost:2025');