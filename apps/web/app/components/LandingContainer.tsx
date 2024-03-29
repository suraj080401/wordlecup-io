import React from "react";
import styles from "../page.module.css";
import Button from "./Button";

export const LandingContainer: React.FC = ({}) => {
	return (
		<div className={styles.landingContainer}>
			<div className={styles.landingBigHeader}>
				<span className={styles.highlightedText}>Chat</span> with random people
				as easy on a <span className={styles.highlightedText}>click</span> of
				button
			</div>
			<div>
				<a href="/join">
					<Button title="Chat Now" />
				</a>
			</div>
		</div>
	);
};

export default LandingContainer;
