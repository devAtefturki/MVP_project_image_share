const mongoose=require('mongoose');
const LoginTable=require('../model/loginTable.js'); 

module.exports={
    createLoginTable:(req,res)=>{
    const  loginTable=new LoginTable({
        _id:mongoose.Types.ObjectId(),
        username:req.body.username,
        respectivePassword:req.body.respectivePassword,
    });
    return loginTable
    .save()
    .then((newLoginTable)=>{
        return res.status(201).json({
            success:true,
            message:'new loginTable created',
            loginTable:newloginTable
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