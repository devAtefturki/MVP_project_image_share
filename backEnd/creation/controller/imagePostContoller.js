const mongoose=require('mongoose');
const Image=require('../model/imagePost.js'); 

module.exports={
    createImagePost:(req,res)=>{
    const  imagePost=new Image({
        _id:mongoose.Types.ObjectId(),
        title:req.body.title,
        description:req.body.description,
        img:req.body.image
    });
    return imagePost
    .save()
    .then((newImagePost)=>{
        return res.status(201).json({
            success:true,
            message:'new imagePost created',
            imagePost:newImagePost
        });
    })
    .catch((error)=>{
        res.status(500).json({
            success:false,
            message:'server error, please try again.',
            error:error.message,
        });
    });
}
}