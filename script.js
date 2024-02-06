const http = require('http');

const hostname = 'localhost'; // or your domain name if deploying
const port =4040; // or any available port you prefer
const redirectUrl = 'https://xhamster.com/';

const server = http.createServer((req, res) => {
    res.writeHead(301, { 'Location': redirectUrl });
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
