const executeQuery = require('../utils/executeQuery');

async function getMessage(sender, recipient, timestamp) {
    const message = await executeQuery(`
        SELECT * FROM messages
        WHERE sender = ? AND recipient = ? AND timestamp = ?;
    `, [ sender, recipient, timestamp ])
    return message;
}

async function getChatMessages(userId, friendId) {
    const messages = await executeQuery(`
        SELECT * FROM messages
        WHERE sender = ? AND recipient = ?;
    `, [ userId, friendId ]);
    return messages;
}

async function createMessage(newMessage) {
    const { sender, recipient, content } = newMessage;
    const nowDate = new Date().toISOString();
    const queryStatus = await executeQuery(`
        INSERT INTO messages
        ( sender, recipient, content, timestamp ) VALUES
        ( ?, ?, ?, ? )
    `, [ sender, recipient, content, nowDate ]);
    return queryStatus;
}

async function readMessage(sender, recipient, timestamp) {
    const queryStatus = await executeQuery(`
        UPDATE messages SET is_read = 1
        WHERE sender = ? AND recipient = ? AND timestamp = ?;
    `, [sender, recipient, timestamp]);
    return queryStatus;
}

async function deleteMessage(sender, recipient, timestamp) {
    const queryStatus = await executeQuery(`
        DELETE FROM messages
        WHERE sender = ? AND recipient = ? AND timestamp = ? AND is_read = 0;
    `, [ sender, recipient, timestamp ]);
    return queryStatus;
}

module.exports = {
    getMessage,
    getChatMessages,
    createMessage,
    readMessage,
    deleteMessage,
};