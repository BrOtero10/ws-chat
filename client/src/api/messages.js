import axios from '../services/axios';

export const getMessage = async (sender, recipient, timestamp) => {
    try {
        const response = await axios.get(`/messages/${sender}/${recipient}/${timestamp}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar mensagem: `, error);
        throw error;
    }
};

export const getChatMessages = async (friendId) => {
    try {
        const response = await axios.get(`/chat-messages/${friendId}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar mensagens entre usuários ${sender} e ${recipient}: `, error);
        throw error;
    }
};

export const createMessage = async (messageData) => {
    try {
        const response = await axios.post(`/messages`, messageData);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar mensagem:', error);
        throw error;
    }
};

export const deleteMessage = async (recipient, timestamp) => {
    try {
        const response = await axios.delete(`/message/${recipient}/${timestamp}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao deletar mensagem: `, error);
        throw error;
    }
};