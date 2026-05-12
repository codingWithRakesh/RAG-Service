import { Server, Socket } from "socket.io";
import http from "http";
import {app} from "../app.js";
import {data} from "../cache/data.js";

const server: http.Server = http.createServer(app);
const io: Server = new Server(server, {
    cors: {
        origin: process.env.CLIENT_URL || "http://localhost:5173",
        methods: ["GET", "POST"],
    },
});

app.set("io", io);

io.on("connection", (socket: Socket) => {
  const userId: string = socket.handshake.auth.userId;

  if (!userId) {
    socket.disconnect(true);
    return;
  }

  socket.join(userId);
  data.set("userId", userId);

  console.log("Connected:", userId);

  socket.on("disconnect", () => {
    console.log("Disconnected:", userId);
  });
});

export {
    server
}