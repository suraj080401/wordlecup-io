"use client";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import LandingContainer from "./components/LandingContainer";

export default function Page(): JSX.Element {
	return (
		<main className={styles.main}>
			<Navbar />
			<LandingContainer />
		</main>
	);
}
