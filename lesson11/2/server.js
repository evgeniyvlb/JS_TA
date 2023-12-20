const http = require('http');
const url = require('url');
const fs = require('fs');
const homePage = 'index.html';

http.createServer(function (req, res) {
    let path = url.parse(req.url, false).pathname;
    
    if (path === '/') { 
        path = "." + path + homePage;
        fs.readFile(path, homePageCall);
    } else if (path === '/download') {
        createAuthors();
    } else if (path === '/index.js') {
        path = "." + path;
        fs.readFile(path, appFile);
    };

    function errorCallback(err) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404");
        }
    }

    function homePageCall(err, data) {
        errorCallback(err);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    }

    function createAuthors() {
        let data = {
            authors: ['Author 1', 'Author 2', 'Author 3', 'Author 4']
        };
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(data));
        return res.end();
    }

    function appFile(err, data) {
        errorCallback(err);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(data);
        return res.end();
    }
    
}).listen(8000);
console.log('Server running ..')
