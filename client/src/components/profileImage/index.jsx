import "./styles.css";
import profileImage from "/user.svg"

export default function ProfileImage() {
    
    const username = 'megagamerop12'
    
    return (
        <div className="profile-area">
            <div className="profile-image">
                <img src={profileImage}/>
            </div>
            <div className="username">{username}</div>
        </div>
    )
}