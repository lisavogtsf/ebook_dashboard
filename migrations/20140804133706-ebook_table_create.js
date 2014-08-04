module.exports = {
  up: function(migration, DataTypes, done) {
    console.log("running ebooks table creation")
    migration.createTable('ebooks', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
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
    })
    .complete(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable('ebooks')
    .completed(done);
  }
}
