const http = require('http');
const host = 'http://localhost';
const port = 3000;

http.createServer((req, res) => {
    res.end('<h1>Server in execution!!</h1>')
}).listen(port, () => console.log(`Server is running in ${host}:${port}`));