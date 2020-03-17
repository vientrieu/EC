const express = require('express');
const router = express.Router();
router.get('/:id',(req, res)=>{
    const productC = require('../controllers/product.C');
    productC
    .getList(req.params.id)
    .then(data => {
        const listPro= data;
        
        res.render('product',{
            table: listPro
        });
    })
    .catch(console.error())
});
module.exports = router;