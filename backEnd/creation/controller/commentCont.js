const mongoose=require('mongoose');
const Comment=require('../model/comments.js'); 

module.exports={
    createComment:(req,res)=>{
    const  comment=new Comment({
        _id:mongoose.Types.ObjectId(),
        uploaderId:req.body.uploaderId,
        content:req.body.content,
        postId:req.body.postId,
    });
    return comment
    .save()
    .then((newComment)=>{
        return res.status(201).json({
            success:true,
            message:'new comment created',
            comment:newComment
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