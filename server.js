const http= require('http');
const  server = http.createServer(function(req,res){
    if(res.url=== '/getServerData'){
        res.end('Hello Node.js');
    }
    res.end("Hello Roja!!!!")

})
server.listen(2828);