const friendsModel = require("../models/friendsModel");

const getFriends = (req, res) => {
    try {
        const friendsData = friendsModel.getFriends();
        res.status(200).json(friendsData);
    } catch (error) {
        console.log("Error - getFriends");
        console.error(error);
        res.status(500).json({ message: "Error retrieving friends data" });
    }
}

const getUserFriends = (req, res) => {
    try {
        const { userId } = req.params;
        const userFriends = friendsModel.getUserFriends(userId);
        res.status(200).json(userFriends);
    } catch (error) {
        console.log("Error - getUserFriends");
        console.error(error);
        res.status(500).json({ message: "Error retrieving user friends" });
    }
}

const createUserFriends = (req, res) => {
    try {
        const newUserFriends = req.body;
        friendsModel.createUserFriends(newUserFriends);
        res.status(201).json({ message: "User friends created successfully" });
    } catch (error) {
        console.log("Error - createUserFriends");
        console.error(error);
        res.status(500).json({ message: "Error creating user friends" });
    }
}

const updateUserFriends = (req, res) => {
    try {
        const { userId } = req.params;
        const updatedFriends = req.body.friends;
        friendsModel.updateUserFriends(userId, updatedFriends);
        res.status(200).json({ message: "User friends updated successfully" });
    } catch (error) {
        console.log("Error - updateUserFriends");
        console.error(error);
        res.status(500).json({ message: "Error updating user friends" });
    }
}

const deleteUserFriends = (req, res) => {
    try {
        const { userId } = req.params;
        friendsModel.deleteUserFriends(userId);
        res.status(200).json({ message: "User friends deleted successfully" });
    } catch (error) {
        console.log("Error - deleteUserFriends");
        console.error(error);
        res.status(500).json({ message: "Error deleting user friends" });
    }
}

const addFriend = (req, res) => {
    try {
        const { userId } = req.params;
        const { friendId } = req.body;
        friendsModel.addFriend(userId, friendId);
        res.status(200).json({ message: "Friend added successfully" });
    } catch (error) {
        console.log("Error - addFriend");
        console.error(error);
        res.status(500).json({ message: "Error adding friend" });
    }
}

const removeFriend = (req, res) => {
    try {
        const { userId } = req.params;
        const { friendId } = req.body;
        console.log('body: ', req.body);
        friendsModel.removeFriend(userId, friendId);
        res.status(200).json({ message: "Friend removed successfully" });
    } catch (error) {
        console.log("Error - removeFriend");
        console.error(error);
        res.status(500).json({ message: "Error removing friend" });
    }
}

module.exports = {
    getFriends,
    getUserFriends,
    createUserFriends,
    updateUserFriends,
    deleteUserFriends,
    addFriend,
    removeFriend
};