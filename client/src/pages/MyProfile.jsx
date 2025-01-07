import ProfileImage from "../components/profileImage";
import Toolbar from "../components/toolbar";

export default function MyProfile() {
    if(!sessionStorage.getItem('userId')) window.location.href = '/login';

    return (
        <>
        <Toolbar onTab="my_profile"/>
        <div className="my-profile-page">
            <ProfileImage />
        </div>
        </>
    )
}