import axios from 'axios';
import axiosWithToken from '../services/axios';

export const getUsers = async () => {
    try {
        const response = await axiosWithToken.get('/users');
        console.log(response)
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        throw error;
    }
};

export const getUser = async (id) => {
    try {
        const response = await axiosWithToken.get(`/user/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar usuário com ID ${id}:`, error);
        throw error;
    }
};

export const getUsersByUsername = async (username) => {
    try {
        const response = await axiosWithToken.get(`/user/username/${username}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar usuário com username ${username}:`, error);
        throw error;
    }
}

export const login = async (userEmail, userPassword) => {
    try {
        const response = await axios.post('/api/login', { userEmail, userPassword });
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar usuário com username ${userEmail}:`, error);
        throw error;
    }
}

export const createUser = async (userData) => {
    try {
        const response = await axios.post('/api/user', userData);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        throw error;
    }
};

export const updateUser = async (userData) => {
    try {
        const response = await axiosWithToken.put('/user', userData);
        return response.data;
    } catch (error) {
        console.error(`Erro ao atualizar usuário: `, error);
        throw error;
    }
};

export const deleteUser = async () => {
    try {
        const response = await axiosWithToken.delete('/user');
        return response.data;
    } catch (error) {
        console.error(`Erro ao deletar usuário: `, error);
        throw error;
    }
};