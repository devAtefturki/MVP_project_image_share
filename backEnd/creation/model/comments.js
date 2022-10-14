const mongoose=require('mongoose');
var commentSchema=new mongoose.Schema({
    uploaderId:String,
    content:String,
    postId:String
});
module.exports=new mongoose.Model('comment',commentSchema)