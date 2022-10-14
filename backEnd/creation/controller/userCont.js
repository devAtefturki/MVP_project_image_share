const mongoose=require('mongoose');
const User=require('../model/users.js'); 

module.exports={
    createUser:(req,res)=>{
    const  user=new User({
        _id:mongoose.Types.ObjectId(),
        username:req.body.username,
        password:req.body.password,
        respectivePostsIds:req.body.respectivePostsIds
    });
    return user
    .save()
    .then((newUser)=>{
        return res.status(201).json({
            success:true,
            message:'new user created',
            user:newUser
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