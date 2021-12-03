const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer( function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', function(error, data) {
        if(error){
            res.writeHead(404);
            res.write('Error. File not Found');
        } else {
            res.write(data)
        }
        res.end()
    })
})

//set server to listen to port
server.listen(port, function(error) {
    if(error) {
        console.log('Something went wrong');
    } else{
        console.log('Server listening on port ' + port);
    }
})