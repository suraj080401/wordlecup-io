import React from "react";
import styles from "../page.module.css";

interface IMessageProps {
	name: string | null;
	message: string;
	time: string;
}

export const ChatContainer: React.FC<IMessageProps> = ({
	name,
	message,
	time,
}) => {
	return (
		<div className={styles.SingleChat}>
			<div className={styles.chatUserName}>{name}</div>
			<div className={styles.chatMessage}>
				<div className={styles.chatText}>{message}</div>
				<div className={styles.chatTime}>{time}</div>
			</div>
		</div>
	);
};

export default ChatContainer;
