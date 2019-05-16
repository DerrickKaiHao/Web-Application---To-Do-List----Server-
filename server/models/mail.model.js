var Sequelize = require('sequelize');

module.exports = function (database) {
    return database.define('mail', {
        mail_id : {
            type: Sequelize.STRING(10),
            primaryKey: true,
            allowNull: false

        },
        name : {
          type: Sequelize.STRING(50),
          primaryKey: false,
          allowNull: false
        },
            from: { 
              type: Sequelize.STRING(50),
              primaryKey: false,
              allowNull: false
              
            },
            subject: { 
                type: Sequelize.STRING(500),
                primaryKey: false,
                allowNull: false
              },
              message: { 
                type: Sequelize.STRING(1000),
                primaryKey: false,
                allowNull: false
              },
              status: { 
                type: Sequelize.STRING(20),
                primaryKey: false,
                allowNull: false
              },
              sort:{
                type: Sequelize.STRING(20),
                primaryKey: false,
                allowNull: false
              },
              deleteStatus:{
                type: Sequelize.STRING(20),
                primaryKey: false,
                allowNull: false
              }
        }, 
        {
        tableName: 'mail',
        timestamps: false
    });
}
