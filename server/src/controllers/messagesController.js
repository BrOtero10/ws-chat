const messagesModel = require("../models/messagesModel");

const getMessage = async (req, res) => {
    try {
        const { sender, recipient, timestamp } = req.params;
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
        const { sender, recipient } = req.params;
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
        const newMessage = req.body;
        const createdMessageStatus = await messagesModel.createMessage(newMessage);
        res.status(201).json({ message: "Message created successfully", createdMessageStatus });
    } catch (error) {
        console.log("Error - createMessage");
        console.error(error);
        res.status(500).json({ message: "Error creating message" });
    }
}

const deleteMessage = async (req, res) => {
    try {
        const { sender, recipient, timestamp } = req.params;
        const deletedMessageStatus = await messagesModel.deleteMessage(sender, recipient, timestamp);
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
    deleteMessage,
};