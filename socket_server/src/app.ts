import express, {Application, Request, Response} from 'express';
import cors from 'cors';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

import sendMessageRouter from "./routes/sendMessage.route.js";
import errorHandler from "./middlewares/error.middleware.js";

app.use("/api/message", sendMessageRouter);

app.use(errorHandler);

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Socket server is running' });
});

export {
    app
}