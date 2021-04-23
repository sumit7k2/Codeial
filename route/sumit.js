const express=require('express');
const router=express.Router();

const sumitController=require('../controllers/sumit_controller');

router.get('/baba',sumitController.sumit);



module.exports=router;