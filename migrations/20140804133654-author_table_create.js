module.exports = {
  up: function(migration, DataTypes, done) {
    console.log("running author table creation");
    migration.createTable('authors',
      {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      displayName: {
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