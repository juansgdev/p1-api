import http from 'http';
import * as utils from './src/modules/utils/utils.js';

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/json'});
    const json = utils.readJSON('./src/modules/utils/mock-test/cfg.json');
    res.write(typeof json + json.username);
    res.end();
}).listen(2000);
