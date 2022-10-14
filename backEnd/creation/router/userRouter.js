const express=require('express');
const {createUser}=require('../controller/userCont.js');
const router =express.Router();
router.post('create/users/',createUser);
module.exports=router;