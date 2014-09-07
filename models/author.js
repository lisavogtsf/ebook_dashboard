// author.js
module.exports = function (sequelize, DataTypes){
  var Author = sequelize.define('author', {
    displayName: {
        type: DataTypes.STRING,
        unique: true
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