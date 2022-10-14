const express=require('express');
const {createLoginTable}=require('../controller/loginTableCont.js');
const router =express.Router();
router.post('admin/users',createLoginTable);
module.exports=router;