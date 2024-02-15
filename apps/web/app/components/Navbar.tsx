import React from "react";
import styles from "../page.module.css";
import { FaSnapchatGhost } from "react-icons/fa";
import Button from "./Button";

interface NavbarProps {
	isLogged: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isLogged }) => {
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
				{!isLogged ? (
					<a className={styles.joinText} href="/join">
						Join
					</a>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default Navbar;
