const dispatchQuery = require('../utils/dispatchQuery');

async function getUserFriends(userId) {
    const userFriends = await dispatchQuery(
        `SELECT recipient 
        FROM BrunoFriends 
        WHERE requester = @userId AND request_status = 1
        UNION
        SELECT requester 
        FROM BrunoFriends 
        WHERE recipient = @userId AND request_status = 1;`, 
        [ ['userId', userId] ]
    );
    return userFriends;
}

async function getFriendshipSolicitations(userId) {
    const friendshipSolicitations = await dispatchQuery(
        `SELECT * 
        FROM BrunoFriends 
        WHERE recipient = @userId AND request_status = 0;`, 
        [ ['userId', userId] ]
    );
    return friendshipSolicitations;
}

async function createFriendshipSolicitation(userId, targetId) {
    const result = await dispatchQuery(
        `INSERT INTO BrunoFriends
        (requester, recipient) VALUES
        (@userId, @targetId);`, 
        [
            ['userId', userId], 
            ['targetId', targetId]
        ],
        null
    );
    return result;
}

async function acceptFriendship(userId, requesterId) {
    const result = await dispatchQuery(
        `UPDATE BrunoFriends 
        SET request_status = 1
        WHERE requester = @requesterId AND recipient = @userId;`, 
        [
            ['userId', userId],
            ['requesterId', requesterId]
        ],
        null
    );
    return result;
}

async function deleteFriendship(userId, friendId) {
    const result = await dispatchQuery(
        `DELETE FROM BrunoFriends
        WHERE 
            (requester = @userId AND recipient = @friendId) 
            OR 
            (recipient = @userId AND requester = @friendId);`, 
        [ ['userId', userId], ['friendId', friendId] ],
        null
    );
    return result;
}

module.exports = {
    getUserFriends,
    getFriendshipSolicitations,
    createFriendshipSolicitation,
    acceptFriendship,
    deleteFriendship,
};