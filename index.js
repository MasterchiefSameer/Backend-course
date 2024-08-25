//not dealing with database, so not required mongoose
//dealing with deployment of backend and express app
//before deployment we go for testing

const express = require('express') // import
// const mongoose = require('mongoose');
require('dotenv').config()
const app = express();
app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// const{ Schema } = mongoose;

app.post('/product',(req,res)=>{
    res.sendStatus(200);
})

//require('dotenv').config()
console.log(process.env)


app.listen(process.env.PORT || 3000 ,()=>{    
    console.log("server is running on port 8084");
})
//module.exports = app;

















