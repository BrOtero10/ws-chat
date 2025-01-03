import './styles.css'
import HeaderBar from "../components/headerBar";
import logoIcon from "/chat-logo.svg"

export default function HomePage() {
    return (
        <>
        <HeaderBar/>
        <div className="home-page">
            <h1>Bem-vindo(a) ao <span data-text="WS CHAT!">WS CHAT!</span><img src={logoIcon}/></h1>
            <h2>Converse com seus amigos em tempo real</h2>
        </div>
        </>
    )
}