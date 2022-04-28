module.exports = {

    HOST: "localhost",

    USER: "root",

    PASSWORD: "p@ssword123",

    DB: "brainQuiz",

    dialect: "mysql",

    pool: {

        max: 5,

        min: 0,

        acquire: 30000,

        idle: 10000

    }

};