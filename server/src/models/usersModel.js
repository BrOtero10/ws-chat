const dispatchQuery = require('../utils/dispatchQuery');

async function getUsers() {
    const users = await dispatchQuery(
        `SELECT id, name, email, username, birthday, bio 
        FROM BrunoUsers;`
    )

    return users;
}

async function getUser(id) {
    const user = await dispatchQuery(
        `SELECT id, name, email, username, birthday, bio
        FROM BrunoUsers
        WHERE id = @id;`,
        [ ['id', id] ]
    );

    return user[0];
}

async function getUserByUsername(username) {
    const user = await dispatchQuery(
        `SELECT id, name, email, username, birthday, bio
        FROM BrunoUsers
        WHERE username LIKE @username;`,
        [ ['username', `%${username}%`] ]
    );

    return user;
}

async function getUserToLogin(email) {
    const user = await dispatchQuery(
        `SELECT * FROM BrunoUsers WHERE email = @email;`,
        [['email', email]]
    );

    return user[0];
}

async function createUser(newUser) {
    const { name, email, username, password, birthday, bio } = newUser;

    const result = await dispatchQuery(
        `INSERT INTO BrunoUsers
        (name, email, username, password, birthday, bio) VALUES
        (@name, @email, @username, @password, @birthday, @bio);`,
        [
            ['name', name],
            ['email', email],
            ['username', username],
            ['password', password],
            ['birthday', birthday],
            ['bio', bio]
        ],
        null
    );

    return result;
}

async function updateUser(updatedUser) {
    const { name, email, username, password, birthday, bio, id } = updatedUser;

    const result = await dispatchQuery(
        `UPDATE BrunoUsers
        SET name = @name, email = @email, username = @username, password = @password, birthday = @birthday, bio = @bio
        WHERE id = @id;`,
        [ 
            ['name', name],
            ['email', email],
            ['username', username],
            ['password', password],
            ['birthday', birthday],
            ['bio', bio], 
            ['id', id]
        ],
        null
    );
    
    return result;
}

async function deleteUser(id) {
    const result = await dispatchQuery(
        `DELETE FROM BrunoUsers WHERE id = @id;`,
        [ ['id', id] ],
        null
    );

    return result;
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