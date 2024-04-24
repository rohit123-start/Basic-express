import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import routes from './auth/auth.routes.js';
import axios from 'axios';
import fs from 'fs'
import imageRoutes from './image/image.routes.js';
import './mailer.js'

const app = express();
app.use(routes)
app.use(express.json())
app.use(imageRoutes)

const server = http.createServer(app);
const io = new Server(server);

console.log("main")

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('message', (msg) => {
    console.log('Message received:', msg);
    // Broadcast the message to all other connected clients
    io.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
