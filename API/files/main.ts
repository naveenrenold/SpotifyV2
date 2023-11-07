import http from 'http';


function playListAPI(request:string) : string
{    
    return 'inside call:)))';
}
const server=http.createServer((req,res)=>{
    switch(req.url)
    {
        case '/playlist':
            {
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(playListAPI(req.url));
            res.end();
            break;
            }
            default:
                {                
                res.writeHead(200,{"Content-Type":"text/html"});
                res.write("Yer got nothin zzzz");
                res.end();
                }
            
    }
});

server.listen(3000);
