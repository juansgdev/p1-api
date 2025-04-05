import http from 'http';
import { readMedia } from './src/modules/utils.js';

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write(readMedia('image.jpeg'));
    res.end();
}).listen(2000);
