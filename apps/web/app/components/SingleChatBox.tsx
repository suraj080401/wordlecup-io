import React from "react";
import styles from "../page.module.css";

export const ChatContainer: React.FC = () => {
	return (
		<div className={styles.SingleChat}>
			<div className={styles.chatUserName}>Suraj Singh</div>
			<div className={styles.chatMessage}>
				<div className={styles.chatText}>Hi How are you buddy?</div>
				<div className={styles.chatTime}>09:15</div>
			</div>
		</div>
	);
};

export default ChatContainer;
