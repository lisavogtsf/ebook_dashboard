module.exports = {
  up: function(migration, DataTypes, done) {
    // add altering commands here, calling 'done' when finished
    migration.renameColumn("ebooks", "author_id", "authorId").complete(done);
  },
  down: function(migration, DataTypes, done) {
    // add reverting commands here, calling 'done' when finished
    migration.renameColumn("ebooks", "authorId", "author_id").complete(done);
  }
};
