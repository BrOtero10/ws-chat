import "./styles.css";
import { useState, useEffect } from "react";
import { fetchUserFriends } from "../../services/friends";
import searchIcon from "/search.svg";
import infoIcon from "/info.svg";
import removeFriendIcon from "/remove-friend.svg";

export default function FriendList() {
    const [ userFriends, setUserFriends ] = useState([]);

    useEffect(() => {
        const fetchFriends = async () => {
            try {
                const userId = sessionStorage.getItem("userId");
                const friends = await fetchUserFriends(userId);
                setUserFriends(friends);

            } catch (error) {
                console.error(error);
            }
        }
        fetchFriends();
    }, [])
    
    return (
        <div className="friend-list">
            <div className="search-friend">
                <img src={searchIcon} />
                <input type="text" placeholder="Pesquisar pessoa"/>
            </div>
            { userFriends.map((friend, index) => 
                <div key={`friend-${friend.username}/${index}`}> 
                    <span className="username">{ friend.username } </span>
                    <span className="common-friends">XXX amigos em comum</span>
                    <span className="info"><img src={infoIcon}/></span>
                    <span className="remove"><img src={removeFriendIcon}/></span>
                </div>
            ) }
        </div>
    )
}