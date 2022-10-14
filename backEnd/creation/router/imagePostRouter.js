const express=require('express');
const {createImagePost}=require('../controller/imagePostContoller.js');
const router =express.Router();
router.post('create/posts',createImagePost);
module.exports=router;