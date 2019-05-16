var Sequelize = require('sequelize');
var configDB = require('./configDB');

var database;


// remains the same
database = new Sequelize(
    configDB.mysql.database,
    configDB.mysql.username,
    configDB.mysql.password, {
        host: configDB.mysql.host,
        dialect: 'mysql',
        operatorsAliases: false,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        logging: configDB.mysql.logging
    }
);
// end

// i will need something here later :)
//var Friend = require('./models/friend.model')(database);

var Category = require('./models/category.model')(database);
var Task = require('./models/task.model')(database);
var Mail = require('./models/mail.model')(database);
// var Furniture = require('./models/furniture.model')(database);

database
    .sync({
        force: configDB.seed
    })
    .then(() => {
        //seed file is empty
        require('./seed')();
        console.log('Database in Sync Now');
    });

module.exports = {
    // export models
    Category: Category,
    Task: Task,
    Mail: Mail
    // ,Furniture: Furniture

}