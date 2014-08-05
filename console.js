var db = require("./models"),
  repl = require("repl");

var newREPL = repl.start("app console > ");
newREPL.context.db = db;