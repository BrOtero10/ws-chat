import { useState, useEffect } from "react";
import ProfileImage from "../components/profileImage";
import ProfileInfo from "../components/profileInfo";
import Toolbar from "../components/toolbar";

export default function MyProfile() {
    const userId = sessionStorage.getItem('userId');
    if(!userId) window.location.href = '/login';

    const [ userData, setUserData ] = useState(null);

    useEffect(() => {
        // const fetchData = async () => {
        //     const data = await fetchUser(userId);
        //     console.log('UserData', data);
        //     setUserData(data);
        // }
        // fetchData();
    }, []);

    return (
        <>
        <Toolbar onTab="my_profile"/>
        <div className="my-profile-page">
            <ProfileImage username={userData?.username} />
            <ProfileInfo userData={userData}/>
        </div>
        </>
    )
}