module.exports = (sequelize, DataTypes) => {
    const Credit = sequelize.define(
      "credit",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          unique: true,
        },
        movieID: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        artistID: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        roleID: {
          type: DataTypes.INTEGER,
          allowNull: false,
        }
      },
      { timestamps: false, freezeTableName: true }
    );
    return Credit;
  };