// author.js
module.exports = function (sequelize, DataTypes){
  var Author = sequelize.define('author', {
    displayname: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
  },
  {
    classMethods: {
      associate: function(db){
        Author.hasMany(db.ebook);
      }
    }
  })
  return Author;
}

// module.exports = Author;