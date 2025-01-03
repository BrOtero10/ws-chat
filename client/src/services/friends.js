import { getFriends, getUserFriends, createUserFriends, updateUserFriends, deleteUserFriends, addFriend, removeFriend } from '../api/friends';
import { getUser } from '../api/users';

export const fetchFriends = async () => {
    try {
        const friends = await getFriends();
        return friends;
    } catch (error) {
        console.error('Erro ao buscar amigos no serviço:', error);
        throw error;
    }
};

export const fetchUserFriends = async (userId) => {
    try {
        const userFriends = await getUserFriends(userId);
        const userFriendsData = []
        for(const friend of userFriends) {
            const data = await getUser(friend);
            userFriendsData.push(data);
        }
        return userFriendsData;
    } catch (error) {
        console.error(`Erro ao buscar amigos do usuário com ID ${userId} no serviço:`, error);
        throw error;
    }
};

export const addUserFriends = async (userFriendsData) => {
    try {
        const newUserFriends = await createUserFriends(userFriendsData);
        return newUserFriends;
    } catch (error) {
        console.error('Erro ao adicionar usuário com lista de amigos no serviço:', error);
        throw error;
    }
};

export const modifyUserFriends = async (userId, userFriendsData) => {
    try {
        const updatedUserFriends = await updateUserFriends(userId, userFriendsData);
        return updatedUserFriends;
    } catch (error) {
        console.error(`Erro ao atualizar lista de amigos do usuário com ID ${userId} no serviço:`, error);
        throw error;
    }
};

export const removeUserFriends = async (userId) => {
    try {
        const deletedUserFriends = await deleteUserFriends(userId);
        return deletedUserFriends;
    } catch (error) {
        console.error(`Erro ao deletar usuário com lista de amigos com ID ${userId} no serviço:`, error);
        throw error;
    }
};

export const addFriendToUser = async (userId, friendData) => {
    try {
        const newFriend = await addFriend(userId, friendData);
        return newFriend;
    } catch (error) {
        console.error(`Erro ao adicionar amigo à lista do usuário com ID ${userId} no serviço:`, error);
        throw error;
    }
};

export const removeFriendFromUser = async (userId, friendData) => {
    try {
        const removedFriend = await removeFriend(userId, friendData);
        return removedFriend;
    } catch (error) {
        console.error(`Erro ao remover amigo da lista do usuário com ID ${userId} no serviço:`, error);
        throw error;
    }
};