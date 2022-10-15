const mongoose=require('mongoose');
var imageSchema= new mongoose.Schema({
    title:{
        type:String,
    required:true,
},
    description:String,
    img:String  //it's going to be a source link instead of buffer
    


});
const image=new mongoose.model('image',imageSchema)
module.exports=image