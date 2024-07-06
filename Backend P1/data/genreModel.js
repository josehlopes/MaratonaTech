module.exports = (sequelize, DataTypes) => {
    const Genre = sequelize.define(
      "genre",
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
        }
      },
      { timestamps: false, freezeTableName: true }
    );
    return Genre;
  };