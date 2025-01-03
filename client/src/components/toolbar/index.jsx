import './styles.css';
import logo from '/chat-logo.svg'
import chats from '/chats.svg';
import chatsSelected from '/chats-selected.svg';
import addFriends from '/add-friends.svg';
import addFriendsSelected from '/add-friends-selected.svg';
import user from '/user.svg';
import userSelected from '/user-selected.svg';
import logout from '/logout.svg';
import { useNavigate } from 'react-router-dom';
import { useWebSocket } from '../../contexts/WebSocketContext';

export default function Toolbar({ onTab }) {
    const navigate = useNavigate();
    const { setUserId } = useWebSocket();

    const handleLogout = () => {
        sessionStorage.removeItem("userId");
        setUserId(null);
        navigate('/');
    }

    return (
        <header className='toolbar'>
            <img className='logo' src={logo} />
            <div className='tabs'>
                <div onClick={() => navigate('/chat')} 
                    className={`${onTab == 'chat' ? 'selected' : ''}`}
                >
                    <img src={ onTab == 'chat' ? chatsSelected : chats}/><span>Chat</span>
                </div>
                <div onClick={() => navigate('/add_friends')}
                    className={`${onTab == 'add_friends' ? 'selected' : ''}`}
                >
                    <img src={ onTab == 'add_friends' ? addFriendsSelected : addFriends}/><span>Adicionar amigos</span>
                </div>
                <div onClick={() => navigate('/my_profile')}
                    className={`${onTab == 'my_profile' ? 'selected' : ''}`}
                >
                    <img src={ onTab == 'my_profile' ? userSelected : user}/><span>Meu perfil</span>
                </div>
            </div>
            <div className='log-out' onClick={handleLogout}>
                <img src={logout}/>
                <span>Log out</span>
            </div>
        </header>
    )
}