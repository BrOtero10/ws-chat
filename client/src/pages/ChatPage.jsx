import { useParams } from "react-router-dom";
import FriendList from "../components/chat/friendList";
import Toolbar from "../components/toolbar";
import Chat from "../components/chat";
import { useState } from "react";
import LoadingIcon from "../components/loadingIcon";

export default function ChatPage() {
    if(!sessionStorage.getItem('access-token')) window.location.href = '/login';

    const { friendId } = useParams();
    const [friendUsername, setFriendUsername] = useState('');

    return (
        <>
        <Toolbar onTab='chat'/>
        <FriendList setFriendUsername={setFriendUsername} />
        { friendId && <Chat friendId={friendId} friendUsername={friendUsername} /> }
        </>
    )
}