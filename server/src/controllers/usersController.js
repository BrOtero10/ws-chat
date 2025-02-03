const cookieConfig = require("../config/cookie.config");
const usersModel = require("../models/usersModel");
const jwt = require('jsonwebtoken');
const argon2 = require('argon2');

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

        // Encontra usuário pelo email
        const userData = await usersModel.getUserToLogin(userEmail);

        if (!userData?.id) {
            return res.status(200).json({ auth: false, message: "E-mail not registered" });
        }

        // Verifica se a senha está correta
        const isPasswordCorrect = await argon2.verify(userData.password, userPassword.trim())
            .catch(error => {
                console.error('Erro ao comparar a senha: ', error);
                return false;
            });

        if (!isPasswordCorrect) {
            return res.status(200).json({ auth: false, message: "Wrong password" });
        }

        const token = jwt.sign(
            { userId: userData.ID_COLABORADOR }, cookieConfig.secret, { expiresIn: (cookieConfig.cookie.maxAge / 1000) }
        );

        res.status(200).json({ auth: true, message: "Login succeeded", token });

    } catch (error) {
        console.log("Error - login");
        console.error(error);
        res.status(500).json({ message: "Error on login" });
    }
}

const createUser = async (req, res) => {
    try {
        const newUser = req.body;

        // Verifica se email já foi registrado
        const verifyExistingUser = await usersModel.getUserToLogin(newUser.email);
        if (verifyExistingUser?.id) {
            return res.status(400).json({ message: "E-mail already registered" });
        }

        // Criptografa a senha
        const hash = await argon2.hash(newUser.password)
            .catch(error => console.error("Error ao criptografar senha: ", error));

        newUser.password = hash;

        const createUserStatus = await usersModel.createUser(newUser);

        if (createUserStatus.rowsAffected[0] === 1) {
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
        const userId = req.userId;
        if(updatedUser.id != userId) return res.status(401).json({ message: "Can not update another user" });

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
        const userId = req.userId;
        const deletedUserStatus = await usersModel.deleteUser(userId);

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