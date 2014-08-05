module.exports = {
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished
    migration.addColumn("ebooks","author_id", {
      type: DataTypes.INTEGER,
      foreignKey: true
    })
    done()
  },
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    migration.removeColumn("ebooks","author_id", {
      type: DataTypes.INTEGER,
      foreignKey: true
    })
    done()
  }
}
