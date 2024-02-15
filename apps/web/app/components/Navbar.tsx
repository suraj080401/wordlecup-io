import React from "react";
import styles from "../page.module.css";
import { FaSnapchatGhost } from "react-icons/fa";

export const Navbar: React.FC = ({}) => {
	return (
		<div className={styles.navbarHeader}>
			<div className={styles.logoContainer}>
				<div className={styles.chatwitLogo}>
					<FaSnapchatGhost />
				</div>
				<div className={styles.chatWitText}>Chatwit</div>
			</div>
			<div className={styles.rightContainer}>
				<div className={styles.aboutText}>About</div>
				<div className={styles.joinText}>Join</div>
			</div>
		</div>
	);
};

export default Navbar;
