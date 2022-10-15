//const express=require( 'express');
//const bodyParser=require( 'body-parser');
//const mongoose= require('mongoose');
//const logger=require('morgan');

//const app = express();/
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:false}));
//app.use(logger('dev'));

//mongoose.connect('mongodb+srv://admin:admin@cluster0.ueskzhy.mongodb.net/?retryWrites=true&w=majority').then(()=>{
 //   console.log("Database connected")
//})
//.catch((error)=>{
 //   console.log("Failed to connect database")
//});

//const port=5035;

//app.get ('/',(req,res)=>{
   // res.status(200).json({message:"welcome to project support",});
//});
//app.listen(port,()=>{
  //  console.log(`listening on port: ${port}`)
//})
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port =5035;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://admin:admin@cluster0.ueskzhy.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true /*, useCreateIndex: true*/ }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB connection established");
})

const usersRouter = require('./creation/router/usersRouter.js');
const userRouter= require('./creation/router/userRouter.js')
const postRouter=require('./creation/router/imagePostRouter.js')

app.use('/users', usersRouter);
app.use('/user',userRouter);
app.use('/posts',postRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
