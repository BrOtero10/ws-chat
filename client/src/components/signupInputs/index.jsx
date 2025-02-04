import './styles.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/users';
import PasswordInput from '../passwordInput';

export default function SignUpInputs() {
    
    const navigate = useNavigate();

    const [newUserData, setNewUserData] = useState({
        // name: '',
        username: '',
        // birthday: '',
        email: '',
        password: '',
        confirmPassword: '',
        // bio: '',
    })

    const handleInputChange = (e) => {
        setNewUserData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        })
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        const response = registerUser(newUserData);
        if(response.createUserStatus) {
            navigate("/login");
        }
    }

    return (
        <form className="signup-inputs">
            {/* <label htmlFor='name'>Insira seu nome</label>
            <input type="text" className="name-input" name='name'
                value={newUserData.name} onChange={handleInputChange}
                autoComplete="off" autoSave='off' required
            /> */}

            <label htmlFor='username'>Insira seu nome de usuário</label>
            <input type="text" className="username-input" name='username'
                value={newUserData.username} onChange={handleInputChange}
                autoComplete="off" autoSave='off' required
            />

            {/* <label htmlFor='birthday'>Insira sua data de nascimento</label>
            <input type='date' name='birthday' autoSave='off'
                value={newUserData.birthday} onChange={handleInputChange} required
            /> */}

            <label htmlFor='email'>Insira seu email</label>
            <input type="text" className="email-input" name='email'
                value={newUserData.email} onChange={handleInputChange}
                autoComplete="off" autoSave='off' required
            />

            <label htmlFor='password'>Insira sua senha</label>            
            <PasswordInput name='password' className="password-field"
                value={newUserData.password} onChange={handleInputChange}
            />

            <label htmlFor='confirmPassword'>Confirme a senha</label>
            <PasswordInput name='confirmPassword' className="confirm-password-field"
                value={newUserData.confirmPassword} onChange={handleInputChange}
            />

            <button type='submit' onClick={handleSignup}>Cadastrar</button>
        </form>
    )
}