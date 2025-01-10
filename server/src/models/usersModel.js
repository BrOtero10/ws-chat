const executeQuery = require('../utils/executeQuery');

async function getUsers() {
    const usersData = await executeQuery(`
        SELECT id, name, email, username, birthday, bio 
        FROM users;
    `);
    return usersData;
}

async function getUser(id) {
    const user = await executeQuery(`
        SELECT id, name, email, username, birthday, bio
        FROM users
        WHERE id = ?
    `, [ id ]);
    return user[0];
}

async function getUserByUsername(username) {
    const foundUsers = await executeQuery(`
        SELECT  id, name, email, username, birthday, bio
        FROM users
        WHERE username = ?
    `, [ username ]);
    return foundUsers;
}

async function getUserToLogin(userEmail) {
    const user = await executeQuery(`
        SELECT * FROM users WHERE email = ?;
    `, [userEmail]);
    return user[0];
} 

async function createUser(newUser) {
    console.log("newUser", newUser);
    const { name, email, username, password, birthday, bio } = newUser;
    const queryStatus = await executeQuery(`
        INSERT INTO users
        (name, email, username, password, birthday, bio) VALUES
        (?, ?, ?, ?, ?, ?);
    `, [ name, email, username, password, birthday, bio ]);
    return queryStatus;
}

async function updateUser(updatedUser) {
    const { name, email, username, password, birthday, bio, id } = updatedUser; 
    const queryStatus = await executeQuery(`
        UPDATE users
        SET name = ?, email = ?, username = ?, password = ?, birthday = ?, bio = ?
        WHERE id = ?
    `, [ name, email, username, password, birthday, bio, id ]);
    return queryStatus;
}

// Função para deletar um usuário
async function deleteUser(id) {
    const queryStatus = await executeQuery(`
        DELETE FROM users
        WHERE id = ?
    `, [ id ]);
    return queryStatus;
}

module.exports = {
    getUsers,
    getUser,
    getUserToLogin,
    getUserByUsername,
    createUser,
    updateUser,
    deleteUser
};