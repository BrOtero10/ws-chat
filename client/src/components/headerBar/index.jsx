import './styles.css'
import { useNavigate } from 'react-router-dom'
import logo from '/chat-logo.svg'

export default function HeaderBar() {

    const navigate = useNavigate()

    return (
        <header className="header-bar">
            <div className='logo'><img src={logo}/></div>
            <div onClick={() => navigate('/')}>Home</div>
            <div onClick={() => navigate('/signup')}>Sign up</div>
            <div onClick={() => navigate('/login')}>Login</div>
        </header>
    )
}