import http from 'http';
import * as utils from './src/modules/utils/utils.js';
import {log} from 'console';

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/json'});

    // ROTAS
    if (req.url == '/user' && req.method == 'GET') {
        res.write(utils.readFile('./cfg.json'));
    }







    res.end();
}).listen(2000);
