const express=require('express');
const {createPostCommentRelation}=require('../controller/posComRelCont.js');
const router =express.Router();
router.post('create/allPosts/allComments',createPostCommentRelation);
module.exports=router;