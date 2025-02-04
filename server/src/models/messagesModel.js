const dispatchQuery = require('../utils/dispatchQuery');

async function getMessage(sender, recipient, timestamp) {
    const message = await dispatchQuery(
        `SELECT * FROM BrunoMessages
        WHERE sender = @sender AND recipient = @recipient AND timestamp = @timestamp;`, 
        [ 
            ['sender', sender], 
            ['recipient', recipient], 
            ['timestamp', timestamp] 
        ]
    );

    return message;
}

async function getChatMessages(userId, friendId) {
    const messages = await dispatchQuery(
        `SELECT * FROM BrunoMessages
        WHERE 
            (sender = @userId AND recipient = @friendId)
            OR
            (sender = @friendId AND recipient = @userId)
        ORDER BY timestamp ASC;`,
        [ ['userId', userId], ['friendId', friendId] ]
    );
    return messages;
}

async function createMessage(newMessage) {
    console.log(newMessage);
    const { sender, recipient, content } = newMessage;
    const result = await dispatchQuery(
        `INSERT INTO BrunoMessages
        (sender, recipient, content) VALUES
        (@sender, @recipient, @content);`, 
        [ 
            ['sender', sender], 
            ['recipient', recipient], 
            ['content', content], 
        ],
        null
    );
    return result;
}

async function readMessage(message) {
    const { sender, recipient, timestamp } = message;

    const result = await dispatchQuery(
        `UPDATE BrunoMessages SET is_read = 1
        WHERE sender = @sender AND recipient = @recipient AND timestamp = @timestamp;`, 
        [ 
            ['sender', sender], 
            ['recipient', recipient], 
            ['timestamp', timestamp] 
        ],
        null
    );
    return result;
}

async function deleteMessage(message) {
    const { sender, recipient, timestamp } = message;

    const result = await dispatchQuery(
        `DELETE FROM BrunoMessages
        WHERE sender = @sender AND recipient = @recipient AND timestamp = @timestamp AND is_read = 0;`, [ 
            ['sender', sender], 
            ['recipient', recipient], 
            ['timestamp', timestamp] 
        ],
        null
    );
    return result;
}

module.exports = {
    getMessage,
    getChatMessages,
    createMessage,
    readMessage,
    deleteMessage,
};