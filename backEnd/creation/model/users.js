const mongoose=require('mongoose');
var userSchema=new mongoose.Schema({
    username:String,
    password:String,
    respectivePostsIds:[Number]
});
module.exports=new mongoose.model('user',userSchema)