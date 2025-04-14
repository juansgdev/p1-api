import http from 'http';
import * as utils from './src/modules/utils/utils.js';

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/json'});
    const json = utils.readJSON('./src/assets/mock/mock.json');
    res.write(json.username);
    res.end();
}).listen(2000);
