const express=require('express');
const app=express();
const port =8000;
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');

app.use(express.static('./assets'));

app.use(expressLayouts);

// extract styles and scripts from individual pages to layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// use express router
app.use('/',require('./route/index'));

// set up view engine
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
    if(err){
        // this below statement is callled interpolation.
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is up and running on port ${port}`);
});