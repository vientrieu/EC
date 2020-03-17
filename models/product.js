'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    sumary: DataTypes.TEXT,
    imagepath: DataTypes.TEXT
  }, {});
  product.associate = function(models) {
    // associations can be defined here
    product.belongsTo(models.category, {foreignKey: 'categoryID'})
  };
  return product;
};