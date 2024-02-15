import React, { useState } from "react";
import styles from "../page.module.css";
import { IoSend } from "react-icons/io5";
import SingleChatBox from "./SingleChatBox";

interface IMessage {
	name: string;
	message: string;
	time: string;
}

export const ChatContainer: React.FC = () => {
	const [allMessages, setAllMessages] = useState<IMessage[]>([]);
	const [currentMessage, setCurrentMessage] = useState<string>("");

	const onSendingMessage = () => {
		const date = new Date();
		let hours = date.getHours() % 12 || 12;
		const minutes = date.getMinutes().toString().padStart(2, "0");
		let stringhours = hours < 10 ? "0" + hours : hours;
		const currentTimeString: string = `${stringhours}:${minutes}`;

		const newMesage: IMessage = {
			name: "Suraj Singh",
			message: currentMessage,
			time: currentTimeString,
		};

		setAllMessages((prevArray) => [...prevArray, newMesage]);

		setCurrentMessage("");
	};

	return (
		<div className={styles.ChatContainer}>
			<div className={styles.ChatBox}>
				<div className={styles.ChatList}>
					{allMessages.map((item, index) => {
						return (
							<SingleChatBox
								name={item.name}
								message={item.message}
								time={item.time}
							/>
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
						/>
					</div>
					<div
						className={styles.sendButton}
						onClick={() => {
							onSendingMessage();
						}}
					>
						<IoSend />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatContainer;
