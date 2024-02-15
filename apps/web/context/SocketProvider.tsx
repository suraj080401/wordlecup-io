"use client";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

interface SocketProviderProps {
	children?: React.ReactNode;
}

interface ISocketContext {
	sendMessage: (details: MessageDetails) => any;
	messages: MessageDetails[];
}

interface MessageDetails {
	name: string | null;
	message: string;
	time: string;
}

const SocketContext = React.createContext<ISocketContext | null>(null);

export const useSocket = () => {
	const state = useContext(SocketContext);
	if (!state) throw new Error(`state is undefined`);

	return state;
};

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
	const [socket, setSocket] = useState<Socket>();
	const [messages, setMessages] = useState<MessageDetails[]>([]);

	const sendMessage: ISocketContext["sendMessage"] = useCallback(
		(details: MessageDetails) => {
			console.log("Sending Message:", details);
			if (socket) {
				socket.emit("event:message", details);
			}
		},
		[socket],
	);

	const onMessageRec = useCallback((msg: MessageDetails) => {
		console.log("From Server Msg Rec", msg);
		setMessages((prevMessages) => [...prevMessages, msg]);
	}, []);

	useEffect(() => {
		const _socket = io("http://localhost:8000");
		_socket.on("message", onMessageRec);

		setSocket(_socket);

		return () => {
			_socket.off("message", onMessageRec);
			_socket.disconnect();
			setSocket(undefined);
		};
	}, []);

	return (
		<SocketContext.Provider value={{ sendMessage, messages }}>
			{children}
		</SocketContext.Provider>
	);
};
