import axios from 'axios';

const API_URL = 'http://localhost:2025'; // Altere para a URL da sua API

export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`);
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        throw error;
    }
};

export const getUser = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/user/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar usuário com ID ${id}:`, error);
        throw error;
    }
};

export const getUsersByUsername = async (username) => {
    try {
        const response = await axios.get(`${API_URL}/user/username/${username}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar usuário com username ${username}:`, error);
        throw error;
    }
}

export const login = async (userEmail, userPassword) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { userEmail, userPassword });
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar usuário com username ${userEmail}:`, error);
        throw error;
    }
}

export const createUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/user`, userData);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        throw error;
    }
};

export const updateUser = async (userData) => {
    try {
        const response = await axios.put(`${API_URL}/user/${id}`, userData);
        return response.data;
    } catch (error) {
        console.error(`Erro ao atualizar usuário com ID ${id}:`, error);
        throw error;
    }
};

export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/user/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao deletar usuário com ID ${id}:`, error);
        throw error;
    }
};