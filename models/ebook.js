// ebook.js
module.exports = function(sequelize, Datatypes){
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
    // what data type should I use? Float? Decimal?
    price: DataTypes.FLOAT,
    priceCategory: DataTypes.STRING
  },
  {
    classMethods: {
      associate: function(db){
        Ebook.belongsTo(db.author);
      }
    }
  }) return Ebook;
}

// not this?
// module.exports = Ebook;