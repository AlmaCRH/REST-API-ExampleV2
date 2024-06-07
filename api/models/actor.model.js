const { sequelize } = require("../../db/db");
const { DataTypes } = require("sequelize");

const Actor = sequelize.define(
  "actor",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  },
  { updatedAt: false }
);

module.exports = Actor;
