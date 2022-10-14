const express=require('express');
const {createGallery}=require('../controller/galleryController.js');
const router =express.Router();
router.post('/Gallery',createGallery);//to be created once
module.exports=router;