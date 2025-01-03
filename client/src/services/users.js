import { getUsers, getUser, createUser, updateUser, deleteUser } from '../api/users';

export const login = async (email, password) => {
    try {
        const users = await getUsers();
        const loginUser = users.find(user => user.email === email);

        if(!loginUser) return { ok: false, message: "Usuário não encontrado" }

        if(loginUser.password !== password) return { ok: false, message: "Senha incorreta" }

        sessionStorage.setItem("userId", loginUser.id);
        return { ok: true }
        
    } catch (error) {
        console.error('Erro ao realizar login:', error);
        throw error;
    }
}

// export const fetchUsers = async () => {
//     try {
//         const users = await getUsers();
//         return users;
//     } catch (error) {
//         console.error('Erro ao buscar usuários no serviço:', error);
//         throw error;
//     }
// };

// export const fetchUser = async (id) => {
//     try {
//         const user = await getUser(id);
//         return user;
//     } catch (error) {
//         console.error(`Erro ao buscar usuário com ID ${id} no serviço:`, error);
//         throw error;
//     }
// };

// export const addUser = async (userData) => {
//     try {
//         const newUser = await createUser(userData);
//         return newUser;
//     } catch (error) {
//         console.error('Erro ao adicionar usuário no serviço:', error);
//         throw error;
//     }
// };

// export const modifyUser = async (id, userData) => {
//     try {
//         const updatedUser = await updateUser(id, userData);
//         return updatedUser;
//     } catch (error) {
//         console.error(`Erro ao atualizar usuário com ID ${id} no serviço:`, error);
//         throw error;
//     }
// };

// export const removeUser = async (id) => {
//     try {
//         const deletedUser = await deleteUser(id);
//         return deletedUser;
//     } catch (error) {
//         console.error(`Erro ao deletar usuário com ID ${id} no serviço:`, error);
//         throw error;
//     }
// };