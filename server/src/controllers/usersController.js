const usersModel = require("../models/usersModel");
const friendsModel = require("../models/friendsModel");

const getUsers = (req, res) => {
    try {
        const usersData = usersModel.getUsers();
        res.status(200).json(usersData);
    } catch (error) {
        console.log("Error - getUsers");
        console.error(error);
        res.status(500).json({ message: "Error retrieving users" });
    }
}

const getUser = (req, res) => {
    try {
        const { id } = req.params;
        const userData = usersModel.getUser(id);
        res.status(200).json(userData);
    } catch (error) {
        console.log("Error - getUser");
        console.error(error);
        res.status(500).json({ message: "Error retrieving user" });
    }
}

const createUser = (req, res) => {
    try {
        const newUser = req.body;
        console.log(newUser);
        usersModel.createUser(newUser);

        // Criar uma lista de amigos vazia para o novo usuário
        friendsModel.createUserFriends({ user: newUser.id, friends: [] });

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.log("Error - createUser");
        console.error(error);
        res.status(500).json({ message: "Error creating user" });
    }
}

const updateUser = (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = req.body;
        usersModel.updateUser(id, updatedUser);
        res.status(200).json({ message: "User updated successfully" });
    } catch (error) {
        console.log("Error - updateUser");
        console.error(error);
        res.status(500).json({ message: "Error updating user" });
    }
}

const deleteUser = (req, res) => {
    try {
        const { id } = req.params;
        usersModel.deleteUser(id);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.log("Error - deleteUser");
        console.error(error);
        res.status(500).json({ message: "Error deleting user" });
    }
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};