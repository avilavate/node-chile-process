process.on('message', (msg) => {
    if (msg.toString().trim() == 'kill'){ 
        console.log('Recvd kill command from parent... killing self')
        process.exit(0);}
    console.log(msg)
});



setInterval(() => {
    process.send('Sending message from child')
}, 1000);