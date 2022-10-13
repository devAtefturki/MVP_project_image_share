const express=require( 'express');
const bodyParser=require( 'body-parser');
const mongoose= require('mongoose');
const logger=require('morgan');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(logger('dev'));

mongoose.connect('mongodb+srv://admin:admin@cluster0.ueskzhy.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log("Database connected")
})
.catch((error)=>{
    console.log("Failed to connect database")
});

const port=5035;

app.get ('/',(req,res)=>{
    res.status(200).json({message:"welcome to project support",});
});
app.listen(port,()=>{
    console.log(`listening on port: ${port}`)
})