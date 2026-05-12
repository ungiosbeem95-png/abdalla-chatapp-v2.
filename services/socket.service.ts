import { io } from 'socket.io-client';

// Halkan waxaan dhowaan gelin doonaa URL-ka server-kaaga dhabta ah
const SOCKET_URL = 'https://your-backend-api.com'; 

export const socket = io(SOCKET_URL, {
  autoConnect: false,
});

export const connectSocket = (username: string) => {
  socket.auth = { username };
  socket.connect();
  console.log('Socket is connecting...');
};
