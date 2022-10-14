const express=require('express');
const {createComment}=require('../controller/commentCont.js');
const router =express.Router();
router.post('create/posts/:id/comments',createComment);
module.exports=router;