const controller = {};
const model = require('../models');
const Pro = model.product;
controller.getList = (cateID)=> {
    return new Promise((resolve, reject) => {
        Pro
        .findAll({ 
            where: { categoryID: cateID},
            raw: true,
            attributes: ['id','name','price','imagepath','categoryID']
        })
        .then(data => resolve(data))
        .catch(error => reject(new Error(error)));
    });
};
controller.getDetail = (proID)=> {
    return new Promise((resolve, reject) => {
        Pro
        .findAll({ 
            where: { id: proID},
            raw: true,
            attributes: ['id','name','price','sumary','imagepath','categoryID']
        })
        .then(data => resolve(data))
        .catch(error => reject(new Error(error)));
    });
};

module.exports = controller;