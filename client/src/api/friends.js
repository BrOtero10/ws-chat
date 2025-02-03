import axios from 'axios';

const API_URL = 'http://localhost:2025'; // Altere para a URL da sua API

export const getFriends = async () => {
    try {
        const response = await axios.get(`${API_URL}/friends`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar amigos:', error);
        throw error;
    }
};

export const getUserFriends = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/friends/${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar amigos do usuário com ID ${userId}:`, error);
        throw error;
    }
};

export const createUserFriends = async (userFriendsData) => {
    try {
        const response = await axios.post(`${API_URL}/friends`, userFriendsData);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar usuário com lista de amigos:', error);
        throw error;
    }
};

export const updateUserFriends = async (userId, userFriendsData) => {
    try {
        const response = await axios.put(`${API_URL}/friends/${userId}`, userFriendsData);
        return response.data;
    } catch (error) {
        console.error(`Erro ao atualizar lista de amigos do usuário com ID ${userId}:`, error);
        throw error;
    }
};

export const deleteUserFriends = async (userId) => {
    try {
        const response = await axios.delete(`${API_URL}/friends/${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao deletar usuário com lista de amigos com ID ${userId}:`, error);
        throw error;
    }
};

export const addFriend = async (userId, friendData) => {
    try {
        const response = await axios.post(`${API_URL}/friends/${userId}/add`, friendData);
        return response.data;
    } catch (error) {
        console.error(`Erro ao adicionar amigo à lista do usuário com ID ${userId}:`, error);
        throw error;
    }
};

export const removeFriend = async (userId, friendData) => {
    try {
        const response = await axios.post(`${API_URL}/friends/${userId}/remove`, {friendId: friendData});
        return response.data;
    } catch (error) {
        console.error(`Erro ao remover amigo da lista do usuário com ID ${userId}:`, error);
        throw error;
    }
};