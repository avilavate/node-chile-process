const cluster=require('cluster');
const os=require('os');

if(cluster.isMaster){
    console.log(os.cpus().length);
    for (let index = 0; index < os.cpus().length; index++) {
        cluster.fork();
    }

    cluster.on('exit',(w,c,s)=>{
        console.log(`Worker id ${w.id}  exited with exit code ${c} starting a new workwe.`);
        cluster.fork();
    });
}else{
    require('./server');
}


