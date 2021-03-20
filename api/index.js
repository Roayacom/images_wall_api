const express = require('express')
const app=express()
const cors=require('cors')

const db=require('./database');
app.use(cors());

//const photo =require('./photo.json');

app.get("/photo",(req,res)=>{
    db.query('select * from photos;', function (error,results){
        if (error) throw error;
     res.json(results);
    });
 
});
app.listen(3000,()=>console.log('listen on port' +3000))