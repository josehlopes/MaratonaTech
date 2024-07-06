module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define(
      "movie",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          unique: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        synopsis: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        durationMinutes: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        releaseDate: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        posterUrl: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        trailerUrl: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        genreId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        }
      },
      { timestamps: false, freezeTableName: true }
    );
    return Movie;
  };