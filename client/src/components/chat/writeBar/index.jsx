import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useWebSocket } from '../../../contexts/WebSocketContext';
import "./styles.css";
import sendIcon from "/send.svg";
import { formatTimestampForMessage } from '../../../utils/formatTime';

export default function Messages({ fetchedMessages = [] }) {
    const userId = sessionStorage.getItem('userId');
    const { friendId } = useParams();

    const [newMessage, setNewMessage] = useState('');
    const [chatMessages, setChatMessages] = useState([...fetchedMessages]);
    const { socket } = useWebSocket();
    const messagesEndRef = useRef(null);

    // Função para rolar a tela até a última mensagem
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // UseEffect para rolar a tela quando uma nova mensagem é adicionada
    useEffect(() => {
        scrollToBottom();
    }, [chatMessages]);

    // UseEffect para configurar o manipulador de mensagens do WebSocket
    useEffect(() => {
        if (socket) {
            socket.onmessage = (event) => {
                const data = JSON.parse(event.data);
                console.log('Recebido: ', data);
                if (data.type === 'message' && data.to === userId) {
                    setChatMessages(prev => [
                        ...prev, 
                        { content: data.content, timestamp: new Date().toISOString(), from: data.from, to: data.to }
                    ]);
                }
            };
        }
    }, [socket, userId]);

    const handleChange = (event) => {
        setNewMessage(event.target.value);
    };

    const sendMessage = () => {
        if (socket && newMessage.trim() !== '') {
            socket.send(JSON.stringify({ type: 'message', content: newMessage, from: userId, to: friendId }));
            setChatMessages(prev => [
                ...prev, 
                { content: newMessage, timestamp: new Date().toISOString(), from: userId, to: friendId }
            ]);
            setNewMessage(''); // Limpa o campo de entrada após o envio
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    const showMessage = (msg) => (
        <p className={`message ${msg.from === userId ? 'mine' : ''}`}>
            <span className="timestamp">
                {formatTimestampForMessage(msg.timestamp)}
            </span>
            <span className="text">{msg.content}</span>
        </p>
    );

    return (
        <>
            <div className="chat-body">
                {chatMessages.map((messag, index) => showMessage(messag))}
                <div ref={messagesEndRef} />
            </div>
            <div className="write-bar">
                <input
                    placeholder="Digite sua mensagem aqui"
                    value={newMessage}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                />
                <span title='Enviar' onClick={sendMessage}>
                    <img src={sendIcon} alt="Enviar" />
                </span>
            </div>
        </>
    );
}