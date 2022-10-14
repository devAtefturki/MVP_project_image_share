const mongoose=require('mongoose');
const PostCommentRelation=require('../model/postCommentRelation'); 

module.exports={
    createPostCommentRelation:(req,res)=>{
    const  postCommentRelation=new PostCommentRelation({
        _id:mongoose.Types.ObjectId(),
        postId:req.body.postId,
        commentsIds:req.body.commentsIds,
    });
    return postCommentRelation
    .save()
    .then((newPostCommentRelation)=>{
        return res.status(201).json({
            success:true,
            message:'new postCommentRelation created',
            postCommentRelation:newPostCommentRelation
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