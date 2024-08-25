// code written in express manner
const express = require('express') // import 
const fs = require('fs')

const data = fs.readFileSync('text.json', 'utf-8');

// const (server name)
const app  = express();  //creating a server
var morgan = require('morgan')

//Middlewares
 //it is application level middleware
app.use((req,res,next)=>{  
    console.log("Middleware created");
    next();
})

//Third-party Middlewares
app.use(morgan('tiny'));
app.use(morgan('combined')); //it gives detail of the file


 //Built-in Middlewares
 app.use(express.json()); //to parse json data
 app.use(express.urlencoded());
 app.use(express.static('public'));  //public is the name of the folder,it access the public folder

  //router - level middleware
const validUser = (req,res,next)=>{
  if(req.query.userName === "Aditya"){  //http://localhost:8081/?userName=Aditya
    next();
  }
  else{
    res.sendStatus(401);   //http://localhost:8081/?userName=othername==>it is not valid
  }
}

const validPass = (req,res,next)=>{
  if(req.body.Password === "1234"){  
    next();
  }
  else{
    res.sendStatus(401);  
  }
} 


  //authorisation checker (project)
  //Built-in Middleware
  
   app.get('/', (req, res) => {   //home router
   res.send("<h1>Hello Aditya !!</h1>");
    //res.send("<h1>Hello world<h1>");
    }); // get method to send a response to the client

  app.get('/data',(req,res)=>{     //this will give right to render this text.json file
    res.sendFile(__dirname + '/text.json');
  })

  app.post('/contact',validPass, (req,res)=>{
    res.send({type:"POST"});
  })


   //app.get('/', (req,res)=>{
     // res.sendStatus(401); // for sending the status
     // res.status(401).send("<h1>Response created</h1>");  // for sending own written status
   //})

   // app.get('/data',(req,res)=>{
    //res.sendFile(__dirname + '/demo.json'); // for finding the path 
    //res.sendFile(__dirname + '/text.json'); //for sending the html file
 //})
 //app.get('/json', (req,res)=>{
  // res.json(data); //it is basically used to sending the json data
 //})

 // API endpoints

//  app.get('/', (req,res)=>{
//    res.send({type:"GET"});
//  })

//  app.post('/contact', (req,res)=>{
//    res.send({type:"POST"});
//  })

//  app.put('/', (req,res)=>{
//    res.send({type:"PUT"});
//  })

//  app.patch('/', (req,res)=>{
//    res.send({type:"PATCH"});
//  })

//  app.delete('/', (req,res)=>{
//    res.send({type:"DELETE"});
//  })

app.listen(8081,()=>{
    console.log("Server is running on port 8081");
})

Module 5 of lecture 4
mongodb and mongoose
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/College1Db');
    console.log("Connection Successfull");

    //use `await mongoose.connect('mongodb;//user;password@127.0.0.1;27017/test');` if your database has auth enabled


    const collegeSchema = new Schema({
        //this is schema
        id: {type:Number, required: true, unique: true}, // String is shorthand for {type: String}
        name: { type: String, max:[10, "The name should not exceed length 10"]},
        email:{type: String, required:true},
        marks: Number,
        date: { type: Date, default: Date.now },
      });
     // const Tank = mongoose.model('College', yourSchema); // create model from schema
      const College1 = mongoose.model('College', collegeSchema);

     //CRUD
     //1.CREATE
     app.post("/teacher",(req,res)=>{
        const studentData = new College1(req.body);
        studentData.save();
        res.status(201).json(studentData);
     })      

     //2.READ
     app.get("/students", async (req,res)=>{
        const studentData = await College1.find({marks:{gt:70}});
     })

     //UPDATE
     app.patch("/students", async (req,res)=>{
        const studentData = await College1.updateOne({name:"shivani"}, {marks:100});
     })

     //DELETE
     app.put('/products', async (req,res)=>{
        const studentData = await College1.deleteOne({ name: /Stark/, age: { $gte: 18 } }); 
        // returns {deletedCount: x} where x is the number of documents deleted.
     })
    app.listen(8083, () => {
        console.log("Server is running on port 8083");
    })
}