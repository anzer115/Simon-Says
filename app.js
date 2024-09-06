const express = require('express') ;
const app = express() ;
require('dotenv').config() ;
const path = require('path') ;
app.use(express.static(path.join(__dirname,"public"))) ;

app.get("/", (req,res)=>{
    res.sendFile("./public/index.html",{root: __dirname}) ;
}) ;



app.listen(process.env.PORT || 3000) ;