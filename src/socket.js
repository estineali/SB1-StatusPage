import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = import.meta.env.VITE_SERVER_ENDPOINT;

export const socket = io(URL, { transports: ["websocket"] });