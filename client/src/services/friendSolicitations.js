import { getFriendSolicitationsFromUser, createFriendSolicitation, deleteFriendSolicitation, acceptFriendSolicitation, rejectFriendSolicitation, getFriendSolicitationsToUser } from '../api/friendSolicitations';
import { getUser } from '../api/users';

export const fetchFriendSolicitationsToUser = async (to) => {
    try {
        const solicitations = await getFriendSolicitationsToUser(to);
        const usersData = []
        for( const solicitation of solicitations ) {
            const data = await getUser(solicitation.from);
            usersData.push(data);
        }

        return usersData;
    } catch (error) {
        console.error('Erro ao buscar solicitações de amizade no serviço:', error);
        throw error;
    }
};

export const fetchFriendSolicitationsFromUser = async (from) => {
    try {
        const solicitations = await getFriendSolicitationsFromUser(from);
        const usersData = []
        for( const solicitation of solicitations ) {
            const data = await getUser(solicitation.to);
            usersData.push(data);
        }

        return usersData;
    } catch (error) {
        console.error('Erro ao buscar solicitações de amizade no serviço:', error);
        throw error;
    }
};


export const fetchFriendSolicitation = async (from, to) => {
    try {
        const solicitation = await getFriendSolicitation(from, to);
        return solicitation;
    } catch (error) {
        console.error(`Erro ao buscar solicitação de amizade de ${from} para ${to} no serviço:`, error);
        throw error;
    }
};

export const addFriendSolicitation = async (solicitationData) => {
    try {
        const newSolicitation = await createFriendSolicitation(solicitationData);
        return newSolicitation;
    } catch (error) {
        console.error('Erro ao adicionar solicitação de amizade no serviço:', error);
        throw error;
    }
};

export const removeFriendSolicitation = async (from, to) => {
    try {
        const deletedSolicitation = await deleteFriendSolicitation(from, to);
        return deletedSolicitation;
    } catch (error) {
        console.error(`Erro ao deletar solicitação de amizade de ${from} para ${to} no serviço:`, error);
        throw error;
    }
};

export const acceptFriendSolicitationService = async (from, to) => {
    try {
        const acceptedSolicitation = await acceptFriendSolicitation(from, to);
        return acceptedSolicitation;
    } catch (error) {
        console.error(`Erro ao aceitar solicitação de amizade de ${from} para ${to} no serviço:`, error);
        throw error;
    }
};

export const rejectFriendSolicitationService = async (from, to) => {
    try {
        const rejectedSolicitation = await rejectFriendSolicitation(from, to);
        return rejectedSolicitation;
    } catch (error) {
        console.error(`Erro ao recusar solicitação de amizade de ${from} para ${to} no serviço:`, error);
        throw error;
    }
};