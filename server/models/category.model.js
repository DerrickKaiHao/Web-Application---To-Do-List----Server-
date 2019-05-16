var Sequelize = require('sequelize');

module.exports = function (database) {
    return database.define('category', {
        cat_id : {
            type: Sequelize.STRING(10),
            primaryKey: true,
            allowNull: false

        },
            cat_name: { 
              type: Sequelize.STRING(50),
              primaryKey: true,
              allowNull: false
            }
        }, {
        tableName: 'categories',
        timestamps: false
    });
}
