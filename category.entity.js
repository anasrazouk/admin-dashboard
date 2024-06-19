import { DataTypes, Model } from "sequelize";
import {sequelize} from "./index.js";

export class Category extends Model {
  id;
  name;
  createdAt;
  updatedAt;
}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    tableName: "categories",
    modelName: "category",
  }
);
