import React from "react";
import styles from "../page.module.css";
import { useSearchParams } from "next/navigation";

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
	const searchParams = useSearchParams();
	const storedName = searchParams.get("name");

	return (
		<div className={storedName === name ? styles.SelfChat : styles.SingleChat}>
			<div className={styles.chatUserName}>{name}</div>
			<div className={styles.chatMessage}>
				<div className={styles.chatText}>{message}</div>
				<div className={styles.chatTime}>{time}</div>
			</div>
		</div>
	);
};

export default ChatContainer;
