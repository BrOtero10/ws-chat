import { useEffect, useState } from "react";
import "./styles.css";
// import { fetchFriendSolicitationsToUser, acceptFriendSolicitationService, rejectFriendSolicitationService } from "../../services/friendSolicitations";
import userImg from "/user.svg"

export default function FriendRequests() {

    const userId = sessionStorage.getItem('userId');
    const [ friendRequests, setFriendRequests ] = useState([]);

    useEffect(() => {
        const fetchRequests = async () => {
            const requests = await fetchFriendSolicitationsToUser(userId);
            setFriendRequests(requests);
            console.log("Solicitações de amizade: ", requests)
        }   
        fetchRequests();
    }, [])

    const handleAcceptFriendship = async (from, index) => {
        const response = await acceptFriendSolicitationService(from, userId);
        alert(response.message);
        const requests = friendRequests.filter((_, i) => i != index);
        setFriendRequests(requests)
    }  

    const handleRejectFriendship = async (from, index) => {
        const response = await rejectFriendSolicitationService(from, userId);
        alert(response.message);
        const requests = friendRequests.filter((_, i) => i != index);
        setFriendRequests(requests)
    }

    return (
        <div className="friend-requests">
            <h2>Solicitações de Amizade</h2>
            <div className="requests">
                { friendRequests.map((request, index) =>
                    <div className="request">
                        <img src={userImg}/>
                        <p>{request.username}</p>
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