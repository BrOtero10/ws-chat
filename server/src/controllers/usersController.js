const usersModel = require("../models/usersModel");

const getUsers = async (req, res) => {
    try {
        const usersData = await usersModel.getUsers();
        res.status(200).json(usersData);
    } catch (error) {
        console.log("Error - getUsers");
        console.error(error);
        res.status(500).json({ message: "Error retrieving users" });
    }
}

const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userData = await usersModel.getUser(id);
        res.status(200).json(userData);
    } catch (error) {
        console.log("Error - getUser");
        console.error(error);
        res.status(500).json({ message: "Error retrieving user" });
    }
}

const getUserByUserName = async (req, res) => {
    try {
        const { username } = req.params;
        const userData = await usersModel.getUserByUsername(username);
        res.status(200).json(userData);
    } catch (error) {
        console.log("Error - getUserByUserName");
        console.error(error);
        res.status(500).json({ message: "Error retrieving user" });
    }
}

const login = async (req, res) => {
    try {
        const { userEmail, userPassword } = req.body;
        const userData = await usersModel.getUserToLogin(userEmail);

        if(!userData?.id) {
            res.status(200).json({ login: false, message: "E-mail not registered" });
        } else if(userData.password == userPassword.trim()) {
            delete userData.password;
            res.status(200).json({ login: true, userData });
        } else {
            res.status(200).json({ login: false, message: "Wrong password" });
        }

    } catch (error) {
        console.log("Error - login");
        console.error(error);
        res.status(500).json({ message: "Error on login" });
    }
}

const createUser = async (req, res) => {
    try {
        const newUser = req.body;

        const verifyExistingUser = await usersModel.getUserToLogin(newUser.email);
        if(verifyExistingUser?.id) {
            res.status(400).json({ message: "E-mail already registered"});
            return;
        }

        const createUserStatus = await usersModel.createUser(newUser);
        if( createUserStatus.affectedRows === 1 ) {
            res.status(201).json({ message: "User created successfully", createUserStatus });
        } else {
            res.status(400).json({ message: "Error on creating User", createUserStatus });
        }
        
    } catch (error) {
        console.log("Error - createUser");
        console.error(error);
        res.status(500).json({ message: "Error creating user" });
    }
}

const updateUser = async (req, res) => {
    try {
        const updatedUser = req.body;
        const updateUserStatus = await usersModel.updateUser(updatedUser);
        res.status(200).json({ message: "User updated successfully", updateUserStatus });
    } catch (error) {
        console.log("Error - updateUser");
        console.error(error);
        res.status(500).json({ message: "Error updating user" });
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUserStatus = await usersModel.deleteUser(id);
        res.status(200).json({ message: "User deleted successfully", deletedUserStatus });
    } catch (error) {
        console.log("Error - deleteUser");
        console.error(error);
        res.status(500).json({ message: "Error deleting user" });
    }
}

module.exports = {
    getUsers,
    getUser,
    getUserByUserName,
    login,
    createUser,
    updateUser,
    deleteUser
};