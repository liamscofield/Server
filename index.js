var http = require("http")
var util = require('util')
var fs = require("fs")


var server = http.createServer(function(request,response){

  if (request.method == 'POST') {
    console.log('this is a post request');
  } else{
    console.log('this is a get request');
  }


  response.writeHead(200,{'Content-Type':'text/plain'});
  response.end('Hello World\n');
});

server.listen(8888);
