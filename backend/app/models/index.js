const Sequelize = require("sequelize");
const sequelize = new Sequelize('testdb', 'root', '', {
  host: "localhost",
  dialect: "mysql",
  port: 3307
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.users = require("./users.model.js")(sequelize, Sequelize);

module.exports = db;
