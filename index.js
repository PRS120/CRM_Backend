import express from "express";
import {MongoClient} from "mongodb";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.MONGO_URL);

const app = express()

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT, ()=>{console.log("Server started running on port: ", PORT)});