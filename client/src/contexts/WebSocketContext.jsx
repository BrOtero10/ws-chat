import { createContext, useContext, useEffect, useState } from 'react';

const WebSocketContext = createContext(null);

export const WebSocketProvider = ({ children }) => {
    const [userId, setUserId] = useState(null);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        let ws;
        if (userId) {
            ws = new WebSocket('ws://localhost:2025');
            ws.onopen = () => {
                ws.send(JSON.stringify({ type: 'identify', userId }));
            };
            setSocket(ws);
        }
        
        return () => {
            if (ws) {
                ws.close();
            }
        };
    }, [userId]);

    return (
        <WebSocketContext.Provider value={{ socket, setUserId }}>
            {children}
        </WebSocketContext.Provider>
    );
};

export const useWebSocket = () => {
    return useContext(WebSocketContext);
};