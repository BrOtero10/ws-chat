import './styles.css';
import { useState } from 'react';
import closedEye from '/closed-eye.svg';
import openedEye from '/opened-eye.svg';

export default function PasswordInput({ value = '', onChange, className, name, placeholder = '', required = true }) {

    const [isPasswordHidden, setIsPasswordHidden] = useState(true)

    return (
        <span className={`password-input-component ${className}`}>
            <input type={isPasswordHidden ? 'password' : 'text'} 
                value={value} onChange={onChange}
                name={name} placeholder={placeholder}
                autoComplete='off' required={required}
            />
            <img src={isPasswordHidden ? openedEye : closedEye}
                onClick={() => setIsPasswordHidden(prev => !prev)}
            />
        </span>
    )
}