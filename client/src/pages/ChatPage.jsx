import { useParams } from "react-router-dom";
import FriendList from "../components/chat/friendList";
import Toolbar from "../components/toolbar";
import Chat from "../components/chat";

export default function ChatPage() {
    if(!sessionStorage.getItem('userId')) window.location.href = '/login';

    const { friendId } = useParams();

    return (
        <>
        <Toolbar onTab='chat'/>
        <FriendList/>
        { friendId && <Chat friendId={friendId} /> }
        </>
    )
}