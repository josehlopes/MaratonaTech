module.exports = (sequelize, DataTypes) => {
    const Artist = sequelize.define(
      "artist",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          unique: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        birthday: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        photoUrl: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        biography: {
          type: DataTypes.STRING,
          allowNull: false,
        }
      },
      { timestamps: false, freezeTableName: true }
    );
    return Artist;
  };