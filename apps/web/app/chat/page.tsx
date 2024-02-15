"use client";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import { SocketProvider } from "../../context/SocketProvider";
import ChatContainer from "../components/ChatContainer";

export default function Page(): JSX.Element {
	return (
		<SocketProvider>
			<main className={styles.main}>
				<Navbar isLogged={true} />
				<ChatContainer />
			</main>
		</SocketProvider>
	);
}
