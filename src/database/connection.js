const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodejs_socialnetwork", "root", "", {
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: 0
});

module.exports = sequelize;
global.sequelize = sequelize;