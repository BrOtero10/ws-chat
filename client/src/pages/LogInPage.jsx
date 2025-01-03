import { useNavigate } from "react-router-dom"
import HeaderBar from "../components/headerBar";
import LoginInputs from '../components/loginInputs';

export default function LogInPage() {

    const navigate = useNavigate();

    const toSignUpPage = () => {
        navigate('/signup');
    }

    return (
        <>
        <HeaderBar/>
        <div className="login-page">
            <h1>Login</h1>
            <LoginInputs/>
            <small>Não possui conta? <span onClick={toSignUpPage}>Cadastre-se!</span></small>
        </div>
        </>
    )
}