"use client";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import NameForm from "../components/NameForm";

export default function Page(): JSX.Element {
	return (
		<main className={styles.main}>
			<Navbar isLogged={true} />
			<div className={styles.nameFormContainer}>
				<NameForm />
			</div>
		</main>
	);
}
