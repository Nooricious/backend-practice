import sequelize from "./config.js";

import UserModel from "../model/auth/index.js";


const syncDb=async()=>{
    await sequelize.sync({ alter:true,force: false });
console.log('All models  synchronized successfully.');
}


export default syncDb;