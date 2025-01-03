const messagesModel = require("../models/messagesModel");

const getMessages = (req, res) => {
    try {
        const messagesData = messagesModel.getMessages();
        res.status(200).json(messagesData);
    } catch (error) {
        console.log("Error - getMessages");
        console.error(error);
        res.status(500).json({ message: "Error retrieving messages" });
    }
}

const getMessage = (req, res) => {
    try {
        const { id } = req.params;
        const messageData = messagesModel.getMessage(id);
        res.status(200).json(messageData);
    } catch (error) {
        console.log("Error - getMessage");
        console.error(error);
        res.status(500).json({ message: "Error retrieving message" });
    }
}

const getMessagesByUsersId = (req, res) => {
    try {
        const { fromId, toId } = req.params;
        const messagesData = messagesModel.getMessagesByUsersId(fromId, toId);
        res.status(200).json(messagesData);
    } catch (error) {
        console.log("Error - getMessagesByUsersId");
        console.error(error);
        res.status(500).json({ message: "Error retrieving messages" });
    }
}

const getMessagesOfPersonalChat = (req, res) => {
    try {
        const { userOneId, userTwoId } = req.params;
        const messagesData = messagesModel.getMessagesOfPersonalChat(userOneId, userTwoId);
        res.status(200).json(messagesData);
    } catch (error) {
        console.log("Error - getMessagesOfPersonalChat");
        console.error(error);
        res.status(500).json({ message: "Error retrieving messages" });
    }
}

const createMessage = (req, res) => {
    try {
        const newMessage = req.body;
        newMessage.timestamp = new Date().toISOString(); // Adiciona o timestamp atual
        messagesModel.createMessage(newMessage);
        res.status(201).json({ message: "Message created successfully" });
    } catch (error) {
        console.log("Error - createMessage");
        console.error(error);
        res.status(500).json({ message: "Error creating message" });
    }
}

const updateMessage = (req, res) => {
    try {
        const { id } = req.params;
        const updatedMessage = req.body;
        messagesModel.updateMessage(id, updatedMessage);
        res.status(200).json({ message: "Message updated successfully" });
    } catch (error) {
        console.log("Error - updateMessage");
        console.error(error);
        res.status(500).json({ message: "Error updating message" });
    }
}

const deleteMessage = (req, res) => {
    try {
        const { id } = req.params;
        messagesModel.deleteMessage(id);
        res.status(200).json({ message: "Message deleted successfully" });
    } catch (error) {
        console.log("Error - deleteMessage");
        console.error(error);
        res.status(500).json({ message: "Error deleting message" });
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