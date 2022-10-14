const mongoose=require('mongoose');
var cpRelationSchema=new mongoose.Schema({
    postId:String,
    commentsIds:[String]
});
module.exports=new mongoose.Model('cpRelation',cpRelationSchema);