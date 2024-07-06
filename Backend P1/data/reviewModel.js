module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define(
      "review",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          unique: true,
        },
        content: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        stars: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        createdAT: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        movieID: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        userID: {
          type: DataTypes.INTEGER,
          allowNull: false,
        }
      },
      { timestamps: false, freezeTableName: true }
    );
    return Review;
  };