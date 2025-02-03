import './styles.css';
import { useState } from "react";
import PasswordInput from "../passwordInput";
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/users';
import { useWebSocket } from '../../contexts/WebSocketContext';

export default function LoginInputs() {
    const navigate = useNavigate()
    const { setUserId } = useWebSocket();

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const verifyLogin = async () => {
        const response = await loginUser(emailValue, passwordValue);

        if(response.ok) {
            const userId = sessionStorage.getItem('userId');
            setUserId(userId);
            navigate('/chat');
        }
    }

    return (
        <div className="login-inputs">
            <input type="text" className="email-input"
                value={emailValue} onChange={(e) => setEmailValue(e.target.value)}
                placeholder='E-mail' autoComplete="off"
            />
            <PasswordInput className='password-input' placeholder='Senha'
                value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} 
            />
            <button onClick={verifyLogin}>Entrar</button>
        </div>
    )
}