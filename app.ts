import express from 'express';
import helloWorld from './routes/hello-world';

const app = express();
const port = 3000;

var http = require('http');
var server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

server.listen(port);

app.use('/hello-world', helloWorld);