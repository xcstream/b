const Sequelize = require('sequelize');

const sequelize = new Sequelize('a', 'root', 'ABcd1234', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 1,
        min: 1,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00',
});

module.exports= {
    sequelize:sequelize,
    User:sequelize.define('user', {
        username: Sequelize.STRING,
        birthday: Sequelize.DATE,
        password: Sequelize.STRING
    }),


    ArticleComment:sequelize.define('ArticleComment', {
        title: Sequelize.STRING,
        content: Sequelize.STRING
    })


}

