const dbConfig = require("./dbConfig");
const { Sequelize, DataTypes, AccessDeniedError } = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USERNAME,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.DIALECT,
        port: dbConfig.PORT,
    }
);

const User = require("./userModel")(sequelize, DataTypes);
const Movie = require("./movieModel")(sequelize, DataTypes);
const Genre = require("./genreModel")(sequelize, DataTypes);
const Review = require("./reviewModel")(sequelize, DataTypes);
const ReviewEvaluation = require("./reviewValuationModel")(sequelize, DataTypes);
const Role = require("./roleModel")(sequelize, DataTypes);
const AccessToken = require("./tokenModel")(sequelize, DataTypes);
const Credit = require("./creditModel")(sequelize, DataTypes);
const Artist = require("./artistModel")(sequelize, DataTypes);

sequelize
    .authenticate()
    .then(() => {
        console.log("Conectado com sucesso!");
    })
    .catch((err) => {
        console.log("Erro ao tentar conectar: " + err);
    });

sequelize
    .sync({ alter: true })
    .then(() => {
        console.log("Tabelas criadas com sucesso!");
    })
    .catch((err) => {
        console.log("Erros: " + err);
    });


// User.hasMany(AccessToken, {
//     foreignKey: "userId"
// });

// AccessToken.belongsTo(User, {
//     foreignKey: "userID"
// });

// Movie.hasMany(Genre, {
//     foreignKey: "genreID"
// });

// Movie.hasMany(Credit, {
//     foreignKey: "creditID"
// })

// Genre.belongsTo(Movie, {
//     foreignKey: "genreID"
// })

// Review.hasMany(Movie, {
//     foreignKey: "movieID"
// })
// Review.hasMany(User, {
//     foreignKey: "userID"
// })

// Review.belongsTo(Movie, {
//     foreignKey: "movieID"
// })

// Review.belongsTo(User, {
//     foreignKey: "userID",
//     as: "user",
// })

// ReviewEvaluation.hasMany(User, {
//     foreignKey: "userID",
//     as: "user",
// })
// ReviewEvaluation.hasMany(User, {
//     foreignKey: "reviewID",
//     as: "review",
// })

// Artist.hasMany(Credit, {
//     foreignKey: "creditID",
//     as: "credit",
// })

// Role.hasMany(Credit, {
//     foreignKey: "creditID",
//     as: "credit",
// })

// Credit.belongsTo(User, {
//     foreignKey: "movieID",
//     as: "movie",
// })
// Credit.belongsTo(Artist, {
//     foreignKey: "artistID",
//     as: "artist",
// })
// Credit.belongsTo(Role, {
//     foreignKey: "roleID",
//     as: "role",
// })

module.exports = {
    Movie,
    Genre,
    User,
    Review,
    ReviewEvaluation,
    Role,
    AccessToken,
    Credit,
    Artist
};