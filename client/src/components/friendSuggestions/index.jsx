import { useState } from "react";
import "./styles.css";

export default function FriendSuggestions() {

    const [ suggestions, setSuggestions ] = useState([]);

    const handleAcceptFriendship = async () => {

    }

    const handleRejectFriendship = async () => {

    }

    return (
        <div className="friend-suggestions">
            <h2>Sugestões de Amizade</h2>
            <div className="suggestions">
                { suggestions.map((suggestion, index) =>
                    <div className="suggestion">
                        <img src={userImg}/>
                        <p>{request.username}</p>
                        <div className="actions">
                            <div onClick={() => handleAcceptFriendship(suggestion.id, index)}>Aceitar</div>
                            <div onClick={() => handleRejectFriendship(suggestion.id, index)}>Recusar</div>
                        </div>
                    </div>
                ) }
                { suggestions.length === 0 && 
                    <p className="no-suggestions-text">Nenhuma nova sugestão de Amizade</p> 
                }
            </div>
        </div>
    )
}