const mongoose = require('mongoose');
mongoose.Promise=global.Promise;
const gallerySchema=new mongoose.Schema({
postsIds:[String],
usersIds:[String],
commentsIds:[String],
});
module.exports=mongoose.model("Gallery",gallerySchema);