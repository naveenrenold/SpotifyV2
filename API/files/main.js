var http=require('http');

const server=http.createServer((req,res)=>{
res.writeHead(200,'Hello wurld',{'Content-type':'text/html'});
res.write("Hi");
res.end();
});

server.listen(3000);
