import { Server } from "socket.io";

interface MessageDetails {
	name: string | null;
	message: string;
	time: string;
}

class SocketService {
	private _io: Server;
	constructor() {
		console.log("Init Socket Server");
		this._io = new Server({
			cors: {
				allowedHeaders: ["*"],
				origin: "*",
			},
		});
	}

	public initListeners() {
		const io = this._io;
		console.log("Initialise socket listners");
		io.on("connect", async (socket) => {
			console.log(`New Socket Connected : ${socket.id}`);
			socket.on(
				"event:message",
				async ({ name, message, time }: MessageDetails) => {
					console.log(`New Message from ${name} at ${time}: ${message}`);
					io.emit("message", { name, message, time });
				},
			);
		});
	}

	get io() {
		return this._io;
	}
}

export default SocketService;
