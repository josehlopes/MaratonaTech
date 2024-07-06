module.exports = (sequelize, DataTypes) => {
  const AccessToken = sequelize.define(
    "acesstoken",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
      },
      tokenString: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      creationDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        unique: false,
        defaultValue: sequelize.NOW

      },
      userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    { timestamps: false, freezeTableName: true }
  );
  return AccessToken;
};