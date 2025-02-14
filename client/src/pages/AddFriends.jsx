import { useState } from "react";
import FriendList from "../components/friendList";
import FriendRequests from "../components/friendRequests";
import FriendSuggestions from "../components/friendSuggestions";
import Toolbar from "../components/toolbar";

export default function AddFriends() {
    if(!sessionStorage.getItem('userId')) window.location.href = '/login';

    const [ userFilterString, setUserFilterString ] = useState("");

    return (
        <>
        <Toolbar onTab="add_friends"/>
        <FriendList setUserFilterString={setUserFilterString}/>
        <div className="add-friends-page">
            <FriendRequests/>
            <div className="divisor"/>
            <FriendSuggestions/>
        </div>
        </>
    )
}