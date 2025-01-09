const friendsModel = require("../models/friendsModel");

const getUserFriends = async (req, res) => {
    try {
        const { userId } = req.params;
        const userFriends = await friendsModel.getUserFriends(userId);
        res.status(200).json(userFriends);
    } catch (error) {
        console.log("Error - getUserFriends");
        console.error(error);
        res.status(500).json({ message: "Error retrieving user friends" });
    }
}

const createFriendshipSolicitation = async (req, res) => {
    try {
        const { user_id, friend_id } = req.body;
        const createdSolicitationsStatus = await friendsModel.createFriendshipSolicitation(user_id, friend_id);
        res.status(201).json({ message: "User friends created successfully", createdSolicitationsStatus });
    } catch (error) {
        console.log("Error - createUserFriends");
        console.error(error);
        res.status(500).json({ message: "Error creating user friends" });
    }
}

const acceptFriendship = async (req, res) => {
    try {
        const { userId, friendId } = req.body;
        const acceptedFriendshipStatus = await friendsModel.acceptFriendship(userId, friendId);
        res.status(200).json({ message: "User friends updated successfully", acceptedFriendshipStatus });
    } catch (error) {
        console.log("Error - updateUserFriends");
        console.error(error);
        res.status(500).json({ message: "Error updating user friends" });
    }
}

const deleteFriendship = async (req, res) => {
    try {
        const { userId, friendId } = req.params;
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
    createFriendshipSolicitation,
    acceptFriendship,
    deleteFriendship,
};