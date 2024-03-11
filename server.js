const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'yourfile.html'); // Change 'yourfile.html' to your HTML file name
    const stat = fs.statSync(filePath);

    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': stat.size
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
});

const port = 3000; // Choose any port you prefer
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
