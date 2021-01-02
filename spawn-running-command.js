const {spawn}=require('child_process');

const child= spawn('lk' ,['-la']);

//child.on('message',(msg)=>console.log(msg));
child.stdout.on('data',(data)=>{
    console.log('data recved.')
    console.log(data.toString('utf8'));
});




child.on('exit',(code,signal)=>{
    console.log(`child process exited with code ${code} & signal ${signal}`);
});

child.on('error',(code,signal)=>{
    console.log(`child process exited with code ${code} & signal ${signal}`);
});


