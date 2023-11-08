import http from 'http';
import fs from 'fs';


function playListAPI(request:string) : string
{
    const fileList=fs.readdirSync("E:\\youtubeVideos");        
    return fileList.join();
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
