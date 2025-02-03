import { useEffect, useState } from "react";
import "./styles.css";
// import { fetchMessagesOfPersonalChat } from "../../services/messages";
import Messages from "./messages";
import DetailsBar from "./detailsBar";

export default function Chat({ friendId }) {
    
    const userId = sessionStorage.getItem("userId");
    const [fetchedMessages, setFetchedMessages] = useState(null);

    useEffect(() => {
        console.log(friendId)
        setFetchedMessages(null);
        const fetchMessages = async () => {
            const data = await fetchMessagesOfPersonalChat(userId, friendId);
            console.log(data);
            setFetchedMessages(data);
        }
        fetchMessages();
    }, [friendId]);

    return (
        <>
        <DetailsBar friendName="almeida"/>

        { fetchedMessages !== null &&
            <Messages fetchedMessages={fetchedMessages} />
        }
        </>
    )
}