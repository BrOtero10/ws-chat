const friendSolicitationsModel = require("../models/friendSolicitationsModel");

const getFriendSolicitationsToUser = (req, res) => {
    try {
        const { to } = req.params;
        const solicitationsData = friendSolicitationsModel.getFriendSolicitationsToUser(to);
        res.status(200).json(solicitationsData);
    } catch (error) {
        console.log("Error - getFriendSolicitationsToUser");
        console.error(error);
        res.status(500).json({ message: "Error retrieving friend solicitations" });
    }
}

const getFriendSolicitationsFromUser = (req, res) => {
    try {
        const { from } = req.params;
        const solicitationsData = friendSolicitationsModel.getFriendSolicitationsFromUser(from);
        res.status(200).json(solicitationsData);
    } catch (error) {
        console.log("Error - getFriendSolicitationsFromUser");
        console.error(error);
        res.status(500).json({ message: "Error retrieving friend solicitations" });
    }
}

const getFriendSolicitation = (req, res) => {
    try {
        const { from, to } = req.params;
        const solicitationData = friendSolicitationsModel.getFriendSolicitation(from, to);
        res.status(200).json(solicitationData);
    } catch (error) {
        console.log("Error - getFriendSolicitation");
        console.error(error);
        res.status(500).json({ message: "Error retrieving friend solicitation" });
    }
}

const createFriendSolicitation = (req, res) => {
    try {
        const newSolicitation = req.body;
        friendSolicitationsModel.createFriendSolicitation(newSolicitation);
        res.status(201).json({ message: "Friend solicitation created successfully" });
    } catch (error) {
        console.log("Error - createFriendSolicitation");
        console.error(error);
        res.status(500).json({ message: "Error creating friend solicitation" });
    }
}

const deleteFriendSolicitation = (req, res) => {
    try {
        const { from, to } = req.params;
        friendSolicitationsModel.deleteFriendSolicitation(from, to);
        res.status(200).json({ message: "Friend solicitation deleted successfully" });
    } catch (error) {
        console.log("Error - deleteFriendSolicitation");
        console.error(error);
        res.status(500).json({ message: "Error deleting friend solicitation" });
    }
}

const acceptFriendSolicitation = (req, res) => {
    try {
        const { from, to } = req.params;
        friendSolicitationsModel.acceptFriendSolicitation(from, to);
        res.status(200).json({ message: "Friend solicitation accepted successfully" });
    } catch (error) {
        console.log("Error - acceptFriendSolicitation");
        console.error(error);
        res.status(500).json({ message: "Error accepting friend solicitation" });
    }
}

const rejectFriendSolicitation = (req, res) => {
    try {
        const { from, to } = req.params;
        friendSolicitationsModel.rejectFriendSolicitation(from, to);
        res.status(200).json({ message: "Friend solicitation rejected successfully" });
    } catch (error) {
        console.log("Error - rejectFriendSolicitation");
        console.error(error);
        res.status(500).json({ message: "Error rejecting friend solicitation" });
    }
}

module.exports = {
    getFriendSolicitationsToUser,
    getFriendSolicitationsFromUser,
    getFriendSolicitation,
    createFriendSolicitation,
    deleteFriendSolicitation,
    acceptFriendSolicitation,
    rejectFriendSolicitation
};