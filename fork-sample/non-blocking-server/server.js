const http = require('http');
const {
    fork
} = require('child_process');
const {
    SSL_OP_SSLEAY_080_CLIENT_DH_BUG
} = require('constants');

const server = http.createServer();

server.on('request', (req, res) => {
    console.log(req.url);
    switch (req.url) {
        case '/long-job':
            const child = fork('long-running-job.js');
            child.send('start',(err=>{
                if(err) console.log(err);
            }))
            child.on('message', (sum) => {
                res.end(sum.toString());
            });

            break;

        default:
            res.end('Invalid url');
    }
    console.log()
});

server.listen('3333', () => {
    console.log(`Server running on ${server.address().port}`);
})