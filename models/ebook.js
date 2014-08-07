// ebook.js
module.exports = function (sequelize, DataTypes){
  var Ebook = sequelize.define('ebook', {
    isbn: { 
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    title: DataTypes.STRING,
    ebookUrl: DataTypes.STRING,
    coverImgUrl: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL(10,2),
    priceCategory: DataTypes.STRING
  },
  {
    classMethods: {
      associate: function(db){
        Ebook.belongsTo(db.author);
      }
    }
  });
  return Ebook;
};

// not this?
// module.exports = Ebook;