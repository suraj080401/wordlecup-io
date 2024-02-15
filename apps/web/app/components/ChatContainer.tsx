import React, { useEffect, useState } from "react";
import styles from "../page.module.css";
import { FaArrowUp } from "react-icons/fa";
import SingleChatBox from "./SingleChatBox";
import { useSocket } from "../../context/SocketProvider";
import { useSearchParams } from "next/navigation";

interface IMessage {
	name: string | null;
	message: string;
	time: string;
}

export const ChatContainer: React.FC = () => {
	const { sendMessage, messages } = useSocket();
	const [currentMessage, setCurrentMessage] = useState<string>("");
	const searchParams = useSearchParams();
	const storedName = searchParams.get("name");

	const getTimeString = () => {
		const date = new Date();
		let hours = date.getHours() % 12 || 12;
		const minutes = date.getMinutes().toString().padStart(2, "0");
		let stringhours = hours < 10 ? "0" + hours : hours;
		const currentTimeString: string = `${stringhours}:${minutes}`;
		return currentTimeString;
	};

	const timeString = getTimeString();

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			onSendingMessage();
		}
	};

	const onSendingMessage = () => {
		const messageObject = {
			name: storedName,
			time: timeString,
			message: currentMessage,
		};

		sendMessage(messageObject);
		setCurrentMessage("");
	};

	return (
		<div className={styles.ChatContainer}>
			<div className={styles.ChatBox}>
				<div className={styles.ChatList}>
					{messages.map((item, index) => {
						return (
							<div key={index}>
								<SingleChatBox
									name={item.name}
									message={item.message}
									time={item.time}
								/>
							</div>
						);
					})}
				</div>
				<div className={styles.InputBox}>
					<div>
						<input
							type="text"
							className={styles.inputMessageBox}
							onChange={(e) => setCurrentMessage(e.target.value)}
							value={currentMessage}
							onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
								handleKeyPress(e);
							}}
						/>
					</div>
					<div
						className={styles.sendButton}
						onClick={() => {
							onSendingMessage();
						}}
					>
						<FaArrowUp />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatContainer;
