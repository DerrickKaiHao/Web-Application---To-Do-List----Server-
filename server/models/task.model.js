var Sequelize = require('sequelize');

module.exports = function (database) {
    return database.define('task', {
        task_id : {
            type: Sequelize.STRING(10),
            primaryKey: true,
            allowNull: false

        },
            task_name: { 
              type: Sequelize.STRING(50),
              primaryKey: true,
              allowNull: false
            },
            task_desc: { 
                type: Sequelize.STRING(500),
                primaryKey: false,
                allowNull: false
              },
              task_cat: { 
                type: Sequelize.STRING(100),
                primaryKey: false,
                allowNull: false
              },
              task_due: { 
                type: Sequelize.STRING(500),
                primaryKey: false,
                allowNull: false
              },
              status:{
                type: Sequelize.INTEGER,
                primaryKey: false,
                allowNull: false
              },
              status_desc:{
                type: Sequelize.STRING(500),
                primaryKey: false,
                allowNull: false
              },
              delete_Status:{
                type: Sequelize.STRING(500),
                primaryKey: false,
                allowNull: false
              },
        }, 
        {
        tableName: 'task',
        timestamps: false
    });
}
