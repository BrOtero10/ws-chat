const messagesModel = require("../models/messagesModel");

const getMessage = async (req, res) => {
    try {
        const userId = req.userId;
        const { sender, recipient, timestamp } = req.params;

        if( sender != userId && recipient != userId) return res.status(401).json("Can not get another users message");

        const messageData = await messagesModel.getMessage(sender, recipient, timestamp);
        res.status(200).json(messageData);

    } catch (error) {
        console.log("Error - getMessage");
        console.error(error);
        res.status(500).json({ message: "Error retrieving message" });
    }
}

const getChatMessages = async (req, res) => {
    try {
        const userId = req.userId;
        const { sender, recipient } = req.params;
        
        if( sender != userId && recipient != userId) return res.status(401).json("Can not get another users chat messages");

        const messagesData = await messagesModel.getChatMessages(sender, recipient);
        res.status(200).json(messagesData);

    } catch (error) {
        console.log("Error - getMessagesOfPersonalChat");
        console.error(error);
        res.status(500).json({ message: "Error retrieving messages" });
    }
}

const createMessage = async (req, res) => {
    try {
        const userId = req.userId;
        const newMessage = req.body;

        newMessage.sender = userId;
        
        const createdMessageStatus = await messagesModel.createMessage(newMessage);
        res.status(201).json({ message: "Message created successfully", createdMessageStatus });

    } catch (error) {
        console.log("Error - createMessage");
        console.error(error);
        res.status(500).json({ message: "Error creating message" });
    }
}

const readMessage = async (req, res) => {
    try {
        const userId = req.userId;
        const { sender, timestamp } = req.body;

        const readMessagesStatus = await messagesModel.readMessage(sender, userId, timestamp);
        res.status(200).json({ message: "Message read sucessfully", readMessagesStatus });
        
    } catch (error) {
        console.log("Error - readMessage");
        console.error(error);
        res.status(500).json({ message: "Error reading message" });
    }
}

const deleteMessage = async (req, res) => {
    try {
        const userId = req.userId;
        const { recipient, timestamp } = req.params;

        const deletedMessageStatus = await messagesModel.deleteMessage(userId, recipient, timestamp);
        res.status(200).json({ message: "Message deleted successfully", deletedMessageStatus });

    } catch (error) {
        console.log("Error - deleteMessage");
        console.error(error);
        res.status(500).json({ message: "Error deleting message" });
    }
}

module.exports = {
    getMessage,
    getChatMessages,
    createMessage,
    readMessage,
    deleteMessage,
};