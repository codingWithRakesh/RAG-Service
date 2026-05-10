import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static("public"))

import uploadRoure from "./routes/upload.route.js";
app.use("/api/v3/files", uploadRoure)

app.get("/", (req, res) => {
    res.json({ message: "api util server" })
})

export { app }