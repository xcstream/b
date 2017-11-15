const model = require('./model')

model.sequelize.sync()
    .then(() => model.User.create({
        username: 'janedoe',
        birthday: '2017-07-20 13:00:00',
        password: '1234'
    }))
    .then(jane => {
        console.log(jane.toJSON());
    });

model.sequelize.sync()
    .then(() => model.ArticleComment.create({
        title: 'janedoe',
        content:''+Math.random()
    }))
    .then(x => {
        console.log(x.toJSON());
    });