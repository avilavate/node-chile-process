const cluster=require('cluster');
const os=require('os');

if(cluster.isMaster){
    console.log(os.cpus().length);
    for (let index = 0; index < os.cpus().length; index++) {
        cluster.fork();
    }
}else{
    require('./server');
}