import axios from '../services/axios';

export const getFriends = async () => {
    try {
        const response = await axios.get('/friends');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar amigos: ', error);
        throw error;
    }
};

export const createFriendshipSolicitation = async ( targetId ) => {
    try {
        const response = await axios.post('/friends', targetId);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar solicitação de amizade: ', error);
        throw error;
    }
}

export const acceptFriendship = async ( targetId ) => {
    try {
        const response = await axios.put('/friends', targetId);
        return response.data;
    } catch (error) {
        console.error('Erro ao aceitar solicitação de amizade: ', error);
        throw error;
    }
}

export const deleteFriendship = async (friendId) => {
    try {
        const response = await axios.delete(`/friends/${friendId}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao deletar amigo com ID ${friendId}: `, error);
        throw error;
    }
};