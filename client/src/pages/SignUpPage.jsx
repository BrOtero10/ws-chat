import HeaderBar from "../components/headerBar";
import SignUpInputs from "../components/signupInputs";

export default function SignUpPage() {

    return (
        <>
        <HeaderBar/>
        <div className="signup-page">
            <h1>Cadastro</h1>
            <SignUpInputs/>
        </div>
        </>
    )
}