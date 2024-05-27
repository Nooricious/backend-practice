import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";


const UserModel = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      
      // allowNull defaults to true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,
        // allowNull defaults to true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,

        // allowNull defaults to true
      },
},

 
);

// `sequelize.define` also returns the model
export default UserModel