const express = require('express');
const router = express.Router();
router.get('/:id',(req, res)=>{
    const productC = require('../controllers/product.C');
    productC
    .getDetail(req.params.id)
    .then(data => {
        const Detail= data;
        var listPro;
        productC.getList(data[0].categoryID)
                            .then(data2=>{
                                listPro = data2;
                                res.render('detail',{
                                    detail: Detail,
                                    table: listPro
                                })
                            })
                            .catch(console.error());
    })
    .catch(console.error())
});
module.exports = router;
