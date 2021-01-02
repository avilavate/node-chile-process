const {exec}=require('child_process');

exec('ls -l',(err,stdout,stderr)=>{

    if(err) {
        console.err("errpr: "+err);
        return;
    }
    console.log(stdout);
});


