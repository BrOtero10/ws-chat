import "./styles.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import searchIcon from '/search.svg'
import { fetchUserFriends } from "../../../services/friends";

export default function FriendList({ setFriendUsername }) {
    const navigate = useNavigate();
    const [ userFriends, setUserFriends ] = useState([]);
    const [ filteredFriends, setFilteredFriends ] = useState([]);
    const [ filterString, setFilterString ] = useState("");

    useEffect(() => {
        const fetchFriends = async () => {
            try {
                const friends = await fetchUserFriends();
                setUserFriends(friends);
                setFilteredFriends(friends);

            } catch (error) {
                console.error(error);
            }
        }
        fetchFriends();
    }, []);
    
    const handleFilter = (e) => {
        setFilterString(e.target.value);
        if(e.target.value == "") {
            setFilteredFriends(userFriends);
        }
        else {
            const filteredUserFriends = userFriends.filter(
                friend => friend.username.includes(e.target.value)
            );
            setFilteredFriends(filteredUserFriends);
        }
        
    }

    return (
        <div className="friend-list-on-chat">
            <div className="search-friend">
                <img src={searchIcon} />
                <input type="text" placeholder="Pesquisar"
                    value={filterString} onChange={handleFilter}
                />
            </div>
            { filteredFriends.map((friend, index) => 
                <div key={`friend-${friend.username}/${index}`}
                    onClick={() => {
                        setFriendUsername(friend.username);
                        navigate(`/chat/${friend.id}`);
                    }}
                > 
                    { friend.username } 
                </div>
            ) }
        </div>
    )
}