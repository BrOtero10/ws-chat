import { useState, useEffect } from "react";
import ProfileImage from "../components/profileImage";
import ProfileInfo from "../components/profileInfo";
import Toolbar from "../components/toolbar";
import { getUserByToken } from "../api/users";

export default function MyProfile() {
    if(!sessionStorage.getItem('access-token')) window.location.href = '/login';

    const [ userData, setUserData ] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUserByToken();
            console.log('UserData', data);
            setUserData(data);
        }
        fetchData();
    }, []);

    return (
        <>
        <Toolbar onTab="my_profile"/>
        <div className="my-profile-page">
            <ProfileImage username={userData?.username} />
            <ProfileInfo userData={userData} editable={true}/>
        </div>
        </>
    )
}