import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import userImg from "/user.svg"
import { fetchFriendshipSolicitations } from "../../services/friends";
import { acceptFriendship, deleteFriendship } from "../../api/friends";

export default function FriendRequests({ userFilterString }) {

    const navigate = useNavigate();

    const [ friendRequests, setFriendRequests ] = useState([]);
    const [ filteredRequests, setFilteredRequest ] = useState([]);

    useEffect(() => {
        const fetchRequests = async () => {
            const requests = await fetchFriendshipSolicitations();
            setFriendRequests(requests);
            console.log("Solicitações de amizade: ", requests)
        }   
        fetchRequests();
    }, [])

    const handleAcceptFriendship = async (from, index) => {
        const response = await acceptFriendship(from);
        alert(response.message);
        const requests = friendRequests.filter((_, i) => i != index);
        setFriendRequests(requests)
    }  

    const handleRejectFriendship = async (from, index) => {
        const response = await deleteFriendship(from);
        alert(response.message);
        const requests = friendRequests.filter((_, i) => i != index);
        setFriendRequests(requests)
    }

    useEffect(() => {
        if(userFilterString === "") {
            setFilteredRequest(friendRequests);
        }
        else {
            setFilteredRequest(
                friendRequests.filter(request => request?.username.toLowerCase().includes(userFilterString.toLowerCase()))
            );
        }

    }, [friendRequests, userFilterString]);

    return (
        <div className="friend-requests">
            <h2>Solicitações de Amizade</h2>
            <div className="requests">
                { filteredRequests.map((request, index) =>
                    <div className="request">
                        <img src={userImg}/>
                        <p onClick={() => navigate(`/profile/${request.id}`)} >{request.username}</p>
                        <div className="actions">
                            <div onClick={() => handleAcceptFriendship(request.id, index)}>Aceitar</div>
                            <div onClick={() => handleRejectFriendship(request.id, index)}>Recusar</div>
                        </div>
                    </div>
                ) }
                { friendRequests.length === 0 && 
                    <p className="no-solicitations-text">Nenhuma nova solicitação de Amizade</p> 
                }
            </div>
        </div>
    )
}