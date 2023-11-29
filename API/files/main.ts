import http from 'http';
import fs from 'fs';


function playListAPI(request:string,path="/media/naveen/28348E46348E174A/youtubeVideos") : string
{
    //const fileList=fs.readdirSync("E:\\youtubeVideos");        
    const fileList=fs.readdirSync(path);        
    return fileList.join('\n');
}
const server=http.createServer((req,res)=>{
    switch(req.url)
    {
        case '/playlist':
            {
            res.writeHead(200,{"Content-Type":"text/html","access-control-allow-origin":"http://localhost:4200"});            
            res.write(playListAPI(req.url,"E:\\youtubeVideos"));
            res.end();
            break;
            }
            default:
                {                
                res.writeHead(200,{"Content-Type":"text/html","access-control-allow-origin":"http://localhost:4200"});
                res.write("Yer got nothin zzzz :3000");
                res.end();
                }
            
    }
});

server.listen(3000);
// const server2=http.createServer((req,res)=>{
//     switch(req.url)
//     {
//         case '/playlist':
//             {
//             res.writeHead(200,{"Content-Type":"text/html","access-control-allow-origin":"http://localhost:4200"});            
//             res.write(playListAPI(req.url));
//             res.end();
//             break;
//             }
//             default:
//                 {                
//                 res.writeHead(200,{"Content-Type":"text/html"});
//                 res.write("Yer got nothin zzzz :3001");
//                 res.end();
//                 }
            
//     }
// });

// server2.listen(3001);
// const server3=http.createServer((req,res)=>{
//     switch(req.url)
//     {
//         case '/playlist':
//             {
//             res.writeHead(200,{"Content-Type":"text/html","access-control-allow-origin":"http://localhost:4200"});            
//             res.write(playListAPI(req.url));
//             res.end();
//             break;
//             }
//             default:
//                 {                
//                 res.writeHead(200,{"Content-Type":"text/html"});
//                 res.write("Yer got nothin zzzz :3002");
//                 res.end();
//                 }
            
//     }
// });

// server3.listen(3002);

