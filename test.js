const Sequelize = require('sequelize');
const sequelize = new Sequelize('a', 'root', 'ABcd1234', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 3,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00',
});

const User = sequelize.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
});

const ArticleComment = sequelize.define('ArticleComment', {
    title: Sequelize.STRING,
    content: Sequelize.STRING
});

sequelize.sync()
    .then(() => User.create({
        username: 'janedoe',
        birthday: '2017-07-20 13:00:00'
    }))
    .then(jane => {
        console.log(jane.toJSON());
    });

sequelize.sync()
    .then(() => ArticleComment.create({
        title: 'janedoe',
        content:''+Math.random()
    }))
    .then(x => {
        console.log(x.toJSON());
    });