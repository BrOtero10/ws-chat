import axios from 'axios';

const API_URL = 'http://localhost:2025'; // Altere para a URL da sua API

export const getMessages = async () => {
    try {
        const response = await axios.get(`${API_URL}/messages`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar mensagens:', error);
        throw error;
    }
};

export const getMessage = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/messages/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar mensagem com ID ${id}:`, error);
        throw error;
    }
};

export const getMessagesOfPersonalChat = async (userOneId, userTwoId) => {
    try {
        const response = await axios.get(`${API_URL}/messages/${userOneId}/${userTwoId}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar mensagens entre usuários ${userOneId} e ${userTwoId}:`, error);
        throw error;
    }
};

export const createMessage = async (messageData) => {
    try {
        const response = await axios.post(`${API_URL}/messages`, messageData);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar mensagem:', error);
        throw error;
    }
};

export const updateMessage = async (id, messageData) => {
    try {
        const response = await axios.put(`${API_URL}/messages/${id}`, messageData);
        return response.data;
    } catch (error) {
        console.error(`Erro ao atualizar mensagem com ID ${id}:`, error);
        throw error;
    }
};

export const deleteMessage = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/messages/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao deletar mensagem com ID ${id}:`, error);
        throw error;
    }
};