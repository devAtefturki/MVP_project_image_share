const mongoose=require('mongoose');
var userSchema=new mongoose.Schema({
    username:String,
    password:String,
    respectivePostsIds:[String]
});
const User=new mongoose.model('user',userSchema)

module.exports=User