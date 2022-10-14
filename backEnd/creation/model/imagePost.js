const mongoose=require('mongoose');
var imageSchema= new mongoose.Schema({
    title:{
        type:String,
    required:true,
},
    description:String,
    img:{
        data:Buffer,
        connectType:String
    }
    


});
module.exports=new mongoose.model('image',imageSchema)