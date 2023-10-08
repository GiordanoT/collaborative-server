import express from 'express';
import {TestRouter} from './routes/test';
import {Server} from 'socket.io'


const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/test', TestRouter);
app.listen(5001);

const io = new Server();
io.on('connect', (socket) => {
    console.log('User Connection');
})
io.listen(5000);

