// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // Column: id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Column: title
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Column: created_by
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "category", // References the "category" model
        key: "id", // References the "id" column of the "category" model
      }
    }



  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
