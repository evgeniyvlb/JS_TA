const http = require('http');
const fs = require('fs');

const url = require('url');

const home = 'index.html';

http.createServer(function (request, result) {
    let path = url.parse(request.url, false).pathname;
    console.log(path)

    if (path === '/') { 
        path = "." + path + home;
        fs.readFile(path, callHomePage);
    } else if (path === '/vote') {
        updateButton();
    } else if (path === '/index.js') {
        path = "." + path;
        fs.readFile(path, appFile);
    };
    
    function errorCallback(err) {
        if (err) {
            result.writeHead(404, {'Content-Type': 'text/html'});
            return result.end("404");
        }
    }

    function callHomePage(err, data) {
        errorCallback(err);
        result.writeHead(200, {'Content-Type': 'text/html'});
        result.write(data);
        return result.end();
    }

    function updateButton() {
        let data = {
            date: (new Date()).toString() };
        result.writeHead(200, {'Content-Type': 'application/json'});
        result.write(JSON.stringify(data));
        return result.end();
    }

    function appFile(err, data) {
        errorCallback(err);
        result.writeHead(200, {'Content-Type': 'application/json'});
        result.write(data);
        return result.end();
    }
}).listen(8000);

console.log('Server running ..')