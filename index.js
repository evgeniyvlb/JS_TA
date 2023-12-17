// #1
// const http = require('http');
// const os = require('node:os');
// const path = require('path');

// http.createServer( function(request, response) {
//     response.writeHead(200, {'Content-Type': 'text/html'});
    
//     response.write('<h1>System Information</h1><br>');
//     response.write(`<p>Current user name: ${os.userInfo().username}</p>`);
//     response.write(`<p>OS type: ${os.platform()}</p>`);
//     response.write(`<p>System work time: ${(os.uptime()/60).toFixed(2)} minutes</p>`);
//     response.write(`<p>Current work directory: ${path.dirname(__filename)}</p>`);
//     response.write(`<p>Server file name: ${path.basename(__filename)}</p>`);
    
//     response.end();
//  }).listen(5000);
//  console.log('Server running at http://127.0.0.1:5000/');


 // #2

const http = require('http');
const os = require('node:os');
const userGreeting = require('./personalmodule');

http.createServer( function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    
    response.write(`<p>Date of request : ${(new Date()).toString()}</p>`);
    response.write(`<p>${userGreeting(os.userInfo().username)}</p>`);

    response.end();
 }).listen(8000);