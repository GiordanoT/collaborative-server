import {createServer} from 'http';
import {Server, Socket} from 'socket.io';

const server = createServer();
const io = new Server(server, {
    // delete this line (setupProxy.js on client)
    cors: {origin: 'http://localhost:3000'}
});

io.on('connection', (socket: Socket) => {
    console.log(socket.id + ' Connection');
    socket.on('disconnect', () => {
        console.log(socket.id + ' Disconnection');
    });
    socket.on('pushAction', (action) => {
        io.emit('pullAction', action)
    })
});




server.listen(5000);
