const express=require('express');
const { generateImage } = require('../controllers/openairController');
const router=express.Router();

// router.post('/generateimage',(req, res)=>{
//     res.status(200).json({
//         success:true,
//     });
// });

router.post('/generateimage', generateImage);

module.exports=router;