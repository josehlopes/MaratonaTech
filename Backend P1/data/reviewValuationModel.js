module.exports = (sequelize, DataTypes) => {
    const ReviewEvaluation = sequelize.define(
      "reviewevaluation",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          unique: true,
        },
        reviewID: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        userID: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        positive: {
          type: DataTypes.INTEGER,
          allowNull: false,
        }
      },
      { timestamps: false, freezeTableName: true }
    );
    return ReviewEvaluation;
  };