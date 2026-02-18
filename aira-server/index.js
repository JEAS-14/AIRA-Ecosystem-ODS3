const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" }
});

// Ruta básica para probar la API
app.get('/', (req, res) => {
    res.send('Servidor de AIRA funcionando (API REST)');
});

// Configuración de WebSockets para tiempo real
io.on('connection', (socket) => {
    console.log('Un usuario se ha conectado al ecosistema AIRA');
    
    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});