const app = require('./index8Testing_and_deployment.js')
//this 2 line run when u add .env file
require('dotenv').config()
console.log(process.env)

//app.listen(8084,()=>{
app.listen(process.env.PORT || 3000 ,()=>{    //this listen(server) is write when i link my port with .env file. 
    //either it use PORT value or otherwise it use 3000
    console.log("server is running on port 8084");
})