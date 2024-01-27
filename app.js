const express = require('express');
const http = require('http');
const path = require('path');
const WebSocket = require('ws');

const PORT = 3000;
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


wss.on('connection', ws => {
    console.log('Novo cliente conectado');
    
    ws.send('Conexão realizada');
    
    ws.on('close', () => {
        console.log('Um cliente se desconectou');
    });
    
    ws.on('message', dados => {
        wss.clients.forEach(cliente => {
            console.log(`Distribuindo a mensagem ${dados}`);
            cliente.send(dados);
        });
    });
    
    ws.onerror = () => {
        console.log('Erro no socket');
    };
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/chat.html'));
});


server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
