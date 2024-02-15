import React from "react";
import styles from "../page.module.css";

interface ButtonProps {
	title: string;
}

export const Button: React.FC<ButtonProps> = ({ title }) => {
	return (
		<div className={styles.chatNow}>
			<div>Chat Now</div>
		</div>
	);
};

export default Button;
