let sum = 0;
process.on('message', (msg) => {
    console.log("Long running job started....");
    for (let index = 0; index < 1e9; index++) {
        sum++;
    }
    process.send(sum);
})


