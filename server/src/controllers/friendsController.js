const friendsModel = require("../models/friendsModel");

const getUserFriends = async (req, res) => {
    try {
        const userId = req.userId;
        const userFriends = await friendsModel.getUserFriends(userId);

        res.status(200).json(userFriends);
    } catch (error) {
        console.log("Error - getUserFriends");
        console.error(error);
        res.status(500).json({ message: "Error retrieving user friends" });
    }
}

const getFriendshipSolicitations = async (req, res) => {
    try {
        const userId = req.userId;
        const friendshipSolicitations = await friendsModel.getFriendshipSolicitations(userId);

        res.status(200).json(friendshipSolicitations)
    } catch (error) {
        console.log("Error - getFriendshipSolicitations");
        console.error(error);
        res.status(500).json({ message: "Error retrieving friendship solicitations" });
    }
}

const getFriendshipSolicitationsFromUser  = async (req, res) => {
    try {
        const userId = req.userId;
        const friendshipSolicitations = await friendsModel.getFriendshipSolicitationsFromUser(userId);

        res.status(200).json(friendshipSolicitations)
    } catch (error) {
        console.log("Error - getFriendshipSolicitations");
        console.error(error);
        res.status(500).json({ message: "Error retrieving friendship solicitations" });
    }
}

const createFriendshipSolicitation = async (req, res) => {
    try {
        const userId = req.userId;
        const { targetId } = req.body;
        const createdSolicitationsStatus = await friendsModel.createFriendshipSolicitation(userId, targetId);

        res.status(201).json({ message: "User friends created successfully", createdSolicitationsStatus });
    } catch (error) {
        console.log("Error - createUserFriends");
        console.error(error);
        res.status(500).json({ message: "Error creating user friends" });
    }
}

const acceptFriendship = async (req, res) => {
    try {
        const userId = req.userId;
        const { requesterId } = req.body;
        const acceptedFriendshipStatus = await friendsModel.acceptFriendship(userId, requesterId);

        res.status(200).json({ message: "User friends updated successfully", acceptedFriendshipStatus });
    } catch (error) {
        console.log("Error - updateUserFriends");
        console.error(error);
        res.status(500).json({ message: "Error updating user friends" });
    }
}

const deleteFriendship = async (req, res) => {
    try {
        const userId = req.userId;
        const { friendId } = req.params;
        const deletedFriendshipStatus = await friendsModel.deleteFriendship(userId, friendId);
        
        res.status(200).json({ message: "User friends deleted successfully", deletedFriendshipStatus });
    } catch (error) {
        console.log("Error - deleteUserFriends");
        console.error(error);
        res.status(500).json({ message: "Error deleting user friends" });
    }
}

module.exports = {
    getUserFriends,
    getFriendshipSolicitations,
    getFriendshipSolicitationsFromUser,
    createFriendshipSolicitation,
    acceptFriendship,
    deleteFriendship,
};