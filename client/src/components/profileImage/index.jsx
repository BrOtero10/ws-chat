import "./styles.css";
import profileImage from "/user.svg"

export default function ProfileImage({ username }) {
    
    return (
        <div className="profile-area">
            <div className="profile-image">
                <img src={profileImage}/>
            </div>
            <div className="username">{username}</div>
        </div>
    )
}