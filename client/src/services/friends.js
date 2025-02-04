import { getFriendshipSolicitations, getFriendshipSolicitationsFromUser, getUserFriends } from "../api/friends";
import { getUser } from "../api/users";

export const fetchUserFriends = async () => {
    const userFriends = await getUserFriends();

    console.log('userFriends', userFriends);

    const userFriendsData = [];
    for(const friend of userFriends) {
        let friendData;

        if(friend?.requester) friendData = await getUser(friend.requester);
        else if(friend?.recipient) friendData = await getUser(friend.recipient);
        
        userFriendsData.push(friendData);
    }

    console.log(userFriendsData);
    return userFriendsData;
}

export const fetchFriendshipSolicitations = async () => {
    const friendshipSolicitations = await getFriendshipSolicitations();

    const userFriendsshipSolicitationsData = [];
    for(const friendshipData of friendshipSolicitations) {
        let data;
        if(friendshipData?.requester) data = await getUser(friendshipData.requester);
        userFriendsshipSolicitationsData.push(data);
    }

    console.log(userFriendsshipSolicitationsData);
    return userFriendsshipSolicitationsData;
}

export const fetchFriendshipSolicitationsFromUser = async () => {
    const friendshipSolicitationsFromUser = await getFriendshipSolicitationsFromUser();

    const userSolicitatedData = [];
    for(const user of friendshipSolicitationsFromUser) {
        let data;
        if(user?.recipient) data = await getUser(user.recipient);
        userSolicitatedData.push(data);
    }

    console.log('userSolicitatedData', userSolicitatedData);
    return userSolicitatedData;
}