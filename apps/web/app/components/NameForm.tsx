import React from "react";
import styles from "../page.module.css";

export const NameForm: React.FC = () => {
	return (
		<div className={styles.nameForm}>
			<div className={styles.chatWitText}>ChatWit</div>
			<div className={styles.inputContainer}>
				<input type="text" name="" id="" className={styles.inputBox} />
			</div>
			<div>
				<div className={styles.submitButton}>Submit</div>
			</div>
		</div>
	);
};

export default NameForm;
