const mongoose=require('mongoose');
const Gallery=require('../model/gallery.js'); 

module.exports={
    createGallery:(req,res)=>{
    const  gallery=new Gallery({
        _id:mongoose.Types.ObjectId(),
        postsIds:req.body.postsIds,
        usersIds:req.body.usersIds,
        commentsIds:req.body.commentsIds
    });
    return gallery
    .save()
    .then((newGallery)=>{
        return res.status(201).json({
            success:true,
            message:'new gallery created',
            gallery:newGallery
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