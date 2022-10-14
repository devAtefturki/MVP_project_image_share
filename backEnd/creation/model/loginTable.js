const mongoose=require('mongoose');
var loginSchema= new mongoose.Schema({
    username:String,
    respectivePassword:String
});
module.exports=new mongoose.model("login",loginSchema);