import express from "express";
import {MongoClient} from "mongodb";
import dotenv from "dotenv";
import {usersRouter} from './routes/users.js';

dotenv.config();
console.log(process.env.MONGO_URL);

const app = express()

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

async function createConnection(){
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("mongo is connected");
  return client;
}
export const client = await createConnection();


app.get('/', function (req, res) {
  res.send('CRM Backend')
})

app.use('/users', usersRouter);



app.listen(PORT, ()=>{console.log("Server started running on port: ", PORT)});