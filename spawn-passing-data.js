const {spawn}=require('child_process');

const child= spawn('wc');

process.stdin.pipe(child.stdin);

child.stdout.on('data',(data)=>{
    console.log('data recved.')
    console.log(data.toString('utf8'));
});

