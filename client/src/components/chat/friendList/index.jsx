import "./styles.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import searchIcon from '/search.svg'

export default function FriendList() {
    const navigate = useNavigate();
    const [ userFriends, setUserFriends ] = useState([]);
    const [ filteredFriends, setFilteredFriends ] = useState([]);
    const [ filterString, setFilterString ] = useState("");

    useEffect(() => {
        // const fetchFriends = async () => {
        //     try {
        //         const userId = sessionStorage.getItem("userId");
        //         const friends = await fetchUserFriends(userId);
        //         setUserFriends(friends);
        //         setFilteredFriends(friends);

        //     } catch (error) {
        //         console.error(error);
        //     }
        // }
        // fetchFriends();
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
                    onClick={() => navigate(`/chat/${friend.id}`)}
                > 
                    { friend.username } 
                </div>
            ) }
        </div>
    )
}