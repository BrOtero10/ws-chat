import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileImage from "../components/profileImage";
import ProfileInfo from "../components/profileInfo";
import Toolbar from "../components/toolbar";

export default function UserProfile() {
    if(!sessionStorage.getItem('userId')) window.location.href = '/login';

    const { userId } = useParams();

    const [ userData, setUserData ] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        }
        fetchData();
    }, []);

    return (
        <>
        <Toolbar onTab="my_profile"/>
        <div className="my-profile-page">
            <ProfileImage username={userData?.username} />
            <ProfileInfo userData={userData} />
        </div>
        </>
    )
}