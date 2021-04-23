const express=require('express');
const app=express();
const port =8000;

// use express router
app.use('/',require('./route/index'));


app.listen(port,function(err){
    if(err){
        // this below statement is callled interpolation.
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is up and running on port ${port}`);
});