import { useEffect, useState } from "react";
import "./styles.css";
// import { fetchMessagesOfPersonalChat } from "../../services/messages";
import Messages from "./messages";
import DetailsBar from "./detailsBar";
import { getChatMessages } from "../../api/messages";

export default function Chat({ friendId, friendUsername }) {
    
    const [fetchedMessages, setFetchedMessages] = useState(null);

    useEffect(() => {
        setFetchedMessages(null);
        const fetchMessages = async () => {
            const data = await getChatMessages(friendId);
            setFetchedMessages(data);
        }
        fetchMessages();
    }, [friendId]);

    return (
        <>
        <DetailsBar friendUsername={friendUsername}/>

        { fetchedMessages !== null &&
            <Messages fetchedMessages={fetchedMessages} />
        }
        </>
    )
}