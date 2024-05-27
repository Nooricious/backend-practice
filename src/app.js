import "dotenv/config.js"
import express from "express";
import authRouter from "./router/authentication/index.js";
import { connectDb } from "./db/config.js";
import syncDb from "./db/init.js";

const app=express();
app.use(express.json());
app.use(authRouter)

connectDb();
syncDb().then(()=>{
    console.log("db sync")
});
console.log("hey")

app.listen(4000,()=>{
    console.log("server is working ")
})
