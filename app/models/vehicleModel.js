const { DataTypes } = require("sequelize");
const sequelize = require("../infra/dbSequelize");

const VehicleModel = sequelize.define(
  "VehicleModel",
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ano: {
      type: DataTypes.INTEGER,
    },
    preco: {
      type: DataTypes.DOUBLE,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "Cars",
    schema: "public",
  }
);

module.exports = VehicleModel;
