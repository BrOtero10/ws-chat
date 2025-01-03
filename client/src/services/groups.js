import { getGroups, getGroup, createGroup, updateGroup, deleteGroup } from '../api/groups';

export const fetchGroups = async () => {
    try {
        const groups = await getGroups();
        return groups;
    } catch (error) {
        console.error('Erro ao buscar grupos no serviço:', error);
        throw error;
    }
};

export const fetchGroup = async (id) => {
    try {
        const group = await getGroup(id);
        return group;
    } catch (error) {
        console.error(`Erro ao buscar grupo com ID ${id} no serviço:`, error);
        throw error;
    }
};

export const addGroup = async (groupData) => {
    try {
        const newGroup = await createGroup(groupData);
        return newGroup;
    } catch (error) {
        console.error('Erro ao adicionar grupo no serviço:', error);
        throw error;
    }
};

export const modifyGroup = async (id, groupData) => {
    try {
        const updatedGroup = await updateGroup(id, groupData);
        return updatedGroup;
    } catch (error) {
        console.error(`Erro ao atualizar grupo com ID ${id} no serviço:`, error);
        throw error;
    }
};

export const removeGroup = async (id) => {
    try {
        const deletedGroup = await deleteGroup(id);
        return deletedGroup;
    } catch (error) {
        console.error(`Erro ao deletar grupo com ID ${id} no serviço:`, error);
        throw error;
    }
};