import dotenv from 'dotenv';
dotenv.config();

import { server } from './socket/socket.js';

const PORT: number | string = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Socket Server is running on port ${PORT}`);
});