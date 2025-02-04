import axios from '../services/axios';

export const getUserFriends = async () => {
    try {
        const response = await axios.get('/friends');
        console.log('response: ', response)
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar amigos: ', error);
        throw error;
    }
};

export const getFriendshipSolicitations = async () => {
    try {
        const response = await axios.get('/friendship_solicitations');
        console.log('response: ', response)
        return response.data;
        
    } catch (error) {
        console.error('Erro ao buscar solicitações de amizade: ', error);
        throw error;
    }
}

export const getFriendshipSolicitationsFromUser = async () => {
    try {
        const response = await axios.get('/friendship_solicitations_from_user');
        console.log('response: ', response)
        return response.data;
        
    } catch (error) {
        console.error('Erro ao buscar solicitações de amizade do usuário: ', error);
        throw error;
    }
}


export const createFriendshipSolicitation = async ( targetId ) => {
    try {
        const response = await axios.post('/friends', { targetId });
        return response.data;
    } catch (error) {
        console.error('Erro ao criar solicitação de amizade: ', error);
        throw error;
    }
}

export const acceptFriendship = async ( requesterId ) => {
    try {
        const response = await axios.put('/friends', { requesterId });
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