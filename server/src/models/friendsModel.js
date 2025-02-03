const executeQuery = require('../utils/executeQuery');

async function getUserFriends(userId) {
    const userFriends = await executeQuery(`
        SELECT friend_id FROM friends WHERE user_id = ?
        UNION
        SELECT user_id FROM friends WHERE friend_id = ?;
    `, [userId, userId]);
    return userFriends;
}

async function getFriendshipSolicitations(userId) {
    const friendshipSolicitations = await executeQuery(`
        SELECT 
    `, [userId])
}

async function createFriendshipSolicitation(userId, targetId) {
    const queryStatus = await executeQuery(`
        INSERT INTO friends
        ( user_id, friend_id ) VALUES
        ( ?, ? );
    `, [userId, targetId]);
    return queryStatus;
}

async function acceptFriendship(userId, targetId) {
    const queryStatus = await executeQuery(`
        UPDATE friends SET status = 'aceita'
        WHERE (user_id = ? AND friend_id = ?) OR (friend_id = ? AND user_id = ?);
    `, [userId, targetId]);
    return queryStatus;
}

async function deleteFriendship(userId, friendId) {
    const queryStatus = await executeQuery(`
        DELETE FROM friends
        WHERE (user_id = ? AND friend_id = ?) OR (friend_id = ? AND user_id = ?);
    `, [userId, friendId]);
    return queryStatus;

}

module.exports = {
    getUserFriends,
    createFriendshipSolicitation,
    acceptFriendship,
    deleteFriendship,
};