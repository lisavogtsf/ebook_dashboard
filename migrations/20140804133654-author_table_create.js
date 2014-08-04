module.exports = {
  up: function(migration, DataTypes, done) {
    console.log("running author table creation");
    migration.createTable('authors',
      {id: {
        type: DataTypes.INTGER,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      displayname: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      }
    })
    .complete(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable('authors')
    .complete(done);

  }
};