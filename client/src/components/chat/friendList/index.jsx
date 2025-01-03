import "./styles.css";
import { fetchUserFriends } from "../../../services/friends"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import searchIcon from '/search.svg'

export default function FriendList() {
    const navigate = useNavigate();
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
        <div className="friend-list-on-chat">
            <div className="search-friend">
                <img src={searchIcon} />
                <input type="text" placeholder="Pesquisar"/>
            </div>
            { userFriends.map((friend, index) => 
                <div key={`friend-${friend.username}/${index}`}
                    onClick={() => navigate(`/chat/${friend.id}`)}
                > 
                    { friend.username } 
                </div>
            ) }
        </div>
    )
}