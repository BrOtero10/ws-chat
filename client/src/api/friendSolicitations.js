import axios from 'axios';

const API_URL = 'http://localhost:2025';

export const getFriendSolicitationsToUser = async (to) => {
    try {
        const response = await axios.get(`${API_URL}/friend-solicitations/to/${to}`);
        return response.data;

    } catch (error) {
        console.error(`Erro ao buscar solicitações de amizade para ${to}:`, error);
        throw error;
    }
}

export const getFriendSolicitationsFromUser = async (from) => {
    try {
        const response = await axios.get(`${API_URL}/friend-solicitations/from/${from}`);
        return response.data;
        
    } catch (error) {
        console.error(`Erro ao buscar solicitações de amizade para ${from}:`, error);
        throw error;
    }
}

export const getFriendSolicitation = async (from, to) => {
    try {
        const response = await axios.get(`${API_URL}/friend-solicitations/${from}/${to}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar solicitação de amizade de ${from} para ${to}:`, error);
        throw error;
    }
};

export const createFriendSolicitation = async (solicitationData) => {
    try {
        const response = await axios.post(`${API_URL}/friend-solicitations`, solicitationData);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar solicitação de amizade:', error);
        throw error;
    }
};

export const deleteFriendSolicitation = async (from, to) => {
    try {
        const response = await axios.delete(`${API_URL}/friend-solicitations/${from}/${to}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao deletar solicitação de amizade de ${from} para ${to}:`, error);
        throw error;
    }
};

export const acceptFriendSolicitation = async (from, to) => {
    try {
        const response = await axios.post(`${API_URL}/friend-solicitations/${from}/${to}/accept`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao aceitar solicitação de amizade de ${from} para ${to}:`, error);
        throw error;
    }
};

export const rejectFriendSolicitation = async (from, to) => {
    try {
        const response = await axios.post(`${API_URL}/friend-solicitations/${from}/${to}/reject`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao recusar solicitação de amizade de ${from} para ${to}:`, error);
        throw error;
    }
};