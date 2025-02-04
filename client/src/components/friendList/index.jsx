import "./styles.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import searchIcon from "/search.svg";
import infoIcon from "/info.svg";
import addFriendIcon from "/add-friend.svg";
import removeFriendIcon from "/remove-friend.svg";
import { createFriendshipSolicitation, deleteFriendship } from "../../api/friends";
import { getUsersByUsername } from "../../api/users";
import { fetchFriendshipSolicitationsFromUser, fetchUserFriends } from "../../services/friends";

export default function FriendList({setUserFilterString}) {
    const navigate = useNavigate();

    const userId = sessionStorage.getItem('userId');

    const [ userFriends, setUserFriends ] = useState([]);
    const [ filteredFriends, setFilteredFriends ] = useState([]);

    const [ solicitatedUsers, setSolicitatedUsers ] = useState([]);
    const [ filteredSolicitaded, setFilterSolicitaded] = useState([]);

    const [ matchingUsers, setMatchingUsers ] = useState([]);

    const [ filterString, setFilterString ] = useState("");

    useEffect(() => {
        const fetchFriends = async () => {
            try {
                const friends = await fetchUserFriends();
                console.log('friends ', friends)
                setUserFriends(friends);

                const friendSolicitations = await fetchFriendshipSolicitationsFromUser();
                setSolicitatedUsers(friendSolicitations);

            } catch (error) {
                console.error(error);
            }
        }
        fetchFriends();
    }, []);

    useEffect(() => {
        if(filterString === "") {
            setFilteredFriends(userFriends)
        }
        else {
            setFilteredFriends ( 
                userFriends.filter(friend => friend?.username.toLowerCase().includes(filterString.toLowerCase())) 
            )
        }
        
    }, [userFriends, filterString]);

    useEffect(() => {
        if(filterString === "") {
            setFilterSolicitaded(solicitatedUsers)
        }
        else {
            setFilterSolicitaded ( 
                solicitatedUsers.filter(friend => friend?.username.toLowerCase().includes(filterString.toLowerCase())) 
            )
        }
    }, [solicitatedUsers, filterString]);

    const handleFilter = (e) => {
        setFilterString(e.target.value);
        setUserFilterString(e.target.value);
        if(e.target.value == "") {
            setFilteredFriends(userFriends);
        }
        else {
            const filteredUserFriends = userFriends.filter(
                friend => friend?.username.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setFilteredFriends(filteredUserFriends);
        }
    };

    const handleFilterBlur = async () => {
        if(filterString != "") {
            console.log("Procurando usuários...");
            const fetchUsers = async () => {
                try {
                    let users = await getUsersByUsername(filterString);
                    users = users.filter(user => 
                        !userFriends.some(friend => 
                            user.username === friend.username && 
                            user.email === friend.email
                        )
                    );
                    users = users.filter(user => 
                        !solicitatedUsers.some(solicitated => 
                            user.username === solicitated.username && 
                            user.email === solicitated.email
                        )
                    );
                    users = users.filter(user => user.id != userId);

                    setMatchingUsers(users);
                    console.log(users);
                } catch (error) {
                    console.error(error);
                }
            }
            fetchUsers();
        }
        else {
            setMatchingUsers([]);
        }
    };

    const handleKeyPress = async (event) => {
        if (event.key === 'Enter') {
            await handleFilterBlur();
        }
    };

    const fetchCreateFriendSolicitation = async (targetId) => {
        console.log('enviado!')
        await createFriendshipSolicitation(targetId);
    }

    const removeFriend = async (targetId) => {
        await deleteFriendship(targetId);
        console.log(targetId, 'removido')
    }

    return (
        <div className="friend-list">
            <div className="search-friend">
                <img src={searchIcon} />
                <input type="text" placeholder="Pesquisar pessoa"
                    value={filterString} onChange={handleFilter}
                    onBlur={handleFilterBlur} onKeyDown={handleKeyPress}
                />
            </div>
            { filteredFriends.length > 0 && (
                <div className="user-friends">
                    <h4>Amigos</h4>
                    {filteredFriends.map((friend, index) => 
                        <div key={`friend-${friend.username}/${index}`}> 
                            <span className="username">{ friend.username } </span>
                            {/* <span className="common-friends">XXX amigos em comum</span> */}
                            <span className="info"
                                onClick={() => navigate(`/profile/${friend.id}`)}
                            ><img src={infoIcon}/></span>
                            <span className="remove" title="Remover amizade"
                                onClick={() => removeFriend(friend.id)}
                            ><img src={removeFriendIcon}/></span>
                        </div>
                    )}
                </div>
            )}
            <div className="divisor"></div>
            { filteredSolicitaded.length > 0 && (
                <div className="solicitated-users">
                    <h4>Solicitações pendentes</h4>
                    { filteredSolicitaded.map((solicitaded, index) => 
                        <div key={`solicitaded-${solicitaded.username}/${index}`}> 
                            <span className="username">{ solicitaded.username } </span>
                            <span className="info"
                                onClick={() => navigate(`/profile/${solicitaded.id}`)}
                            ><img src={infoIcon}/></span>
                            <span className="remove" title="Remover solicitação de amizade"
                                onClick={() => removeFriend(solicitaded.id)}
                            ><img src={removeFriendIcon}/></span>
                        </div>
                    )}
                </div>
            )}
            <div className="divisor"></div>
            { matchingUsers.length > 0 && (
                <div className="search-matching-users">
                    <h4>Resultados</h4>
                    { matchingUsers.map((user, index) => 
                        <div key={`friend-${user.username}/${index}`}> 
                            <span className="username">{ user.username } </span>
                            <span className="common-friends">XXX amigos em comum</span>
                            <span className="info"
                                onClick={() => navigate(`/profile/${user.id}`)}
                            ><img src={infoIcon}/></span>
                            <span className="add" title="Enviar solicitação de amizade"
                                onClick={() => fetchCreateFriendSolicitation(user.id)}
                            ><img src={addFriendIcon}/></span>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}