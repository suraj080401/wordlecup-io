import React from "react";
import styles from "../page.module.css";
import { IoSend } from "react-icons/io5";

export const ChatContainer: React.FC = () => {
	return (
		<div className={styles.ChatContainer}>
			<div className={styles.ChatBox}>
				<div className={styles.ChatList}></div>
				<div className={styles.InputBox}>
					<div>
						<input type="text" className={styles.inputMessageBox} />
					</div>
					<div className={styles.sendButton}>
						<IoSend />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChatContainer;
