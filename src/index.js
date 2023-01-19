var http = require("http");
const qstr = require("querystring");
const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
   // console.log(req.url)

    const url = req.url.split("?")[0];//
    //const qparams  = qstr.parse(req.url.split("?")[1]);//
    if(url=="/welcome"){
        res.setHeader("Content-Type", "text/plain ");
        res.writeHead(200);
        res.end(`Welcome to Dominos!`);
    }
    else if(url=="/contact"){
        res.setHeader("Content-Type", "text/plain ");
        res.writeHead(200);
        res.end(JSON.stringify({ 
                phone: '18602100000', 
                email: 'guestcaredominos@jublfood.com' 
               
        }))
    }else{
        res.setHeader("Content-Type", "text/plain ");
        res.writeHead(404);
        res.end("page not found 404")

    }

}
module.exports = httpServer;
httpServer.listen(8081,()=>{console.log("server started at port number 8081")})



