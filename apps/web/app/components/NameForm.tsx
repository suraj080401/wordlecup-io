"use client";

import React, { useEffect, useState } from "react";
import styles from "../page.module.css";
import { useRouter } from "next/navigation";

export const NameForm: React.FC = () => {
	const [name, setName] = useState<string>("");
	const router = useRouter();

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};

	const setUserNameInLocal = () => {
		setName("");
		router.push(`/chat?name=${name}`);
	};

	return (
		<div className={styles.nameForm}>
			<div className={styles.chatWitText}>ChatWit</div>
			<div className={styles.inputContainer}>
				<input
					type="text"
					name=""
					id=""
					className={styles.inputBox}
					value={name}
					onChange={handleNameChange}
				/>
			</div>
			<div>
				<div
					className={styles.submitButton}
					onClick={() => setUserNameInLocal()}
				>
					Submit
				</div>
			</div>
		</div>
	);
};

export default NameForm;
