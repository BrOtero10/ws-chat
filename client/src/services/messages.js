import { getMessages, getMessage, getMessagesOfPersonalChat, createMessage, updateMessage, deleteMessage } from '../api/messages';

export const fetchMessages = async () => {
    try {
        const messages = await getMessages();
        return messages;
    } catch (error) {
        console.error('Erro ao buscar mensagens no serviço:', error);
        throw error;
    }
};

export const fetchMessage = async (id) => {
    try {
        const message = await getMessage(id);
        return message;
    } catch (error) {
        console.error(`Erro ao buscar mensagem com ID ${id} no serviço:`, error);
        throw error;
    }
};

export const fetchMessagesOfPersonalChat = async (userOneId, userTwoId) => {
    try {
        const messages = await getMessagesOfPersonalChat(userOneId, userTwoId);
        return messages;
    } catch (error) {
        console.error(`Erro ao buscar mensagens entre usuários ${userOneId} e ${userTwoId} no serviço:`, error);
        throw error;
    }
};

export const addMessage = async (messageData) => {
    try {
        const newMessage = await createMessage(messageData);
        return newMessage;
    } catch (error) {
        console.error('Erro ao adicionar mensagem no serviço:', error);
        throw error;
    }
};

export const modifyMessage = async (id, messageData) => {
    try {
        const updatedMessage = await updateMessage(id, messageData);
        return updatedMessage;
    } catch (error) {
        console.error(`Erro ao atualizar mensagem com ID ${id} no serviço:`, error);
        throw error;
    }
};

export const removeMessage = async (id) => {
    try {
        const deletedMessage = await deleteMessage(id);
        return deletedMessage;
    } catch (error) {
        console.error(`Erro ao deletar mensagem com ID ${id} no serviço:`, error);
        throw error;
    }
};