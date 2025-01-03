import axios from 'axios';

const API_URL = 'http://localhost:2025'; // Altere para a URL da sua API

export const getGroups = async () => {
    try {
        const response = await axios.get(`${API_URL}/groups`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar grupos:', error);
        throw error;
    }
};

export const getGroup = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/groups/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar grupo com ID ${id}:`, error);
        throw error;
    }
};

export const createGroup = async (groupData) => {
    try {
        const response = await axios.post(`${API_URL}/groups`, groupData);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar grupo:', error);
        throw error;
    }
};

export const updateGroup = async (id, groupData) => {
    try {
        const response = await axios.put(`${API_URL}/groups/${id}`, groupData);
        return response.data;
    } catch (error) {
        console.error(`Erro ao atualizar grupo com ID ${id}:`, error);
        throw error;
    }
};

export const deleteGroup = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/groups/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao deletar grupo com ID ${id}:`, error);
        throw error;
    }
};