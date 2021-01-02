const http= require('http');

const server = http.createServer();

server.on('request',(req,res)=>{
    res.end(`Server running on ${server.address().port} Process Id: ${process.pid}\n`);
});

server.listen(3333,()=>{
    console.log(`Server running on ${server.address().port} Process Id: ${process.pid}`);
});

setTimeout(() => {
    process.exit(1);
}, Math.floor(Math.random()*100000));