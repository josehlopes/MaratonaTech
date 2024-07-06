module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define(
      "role",
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
    return Role;
  };