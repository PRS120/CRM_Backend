import express, { application } from "express";
import {
    getUserByEmail,
    getUsers,
    createUser} from "./helper.js"
//import bcrypt from "bcrypt";
//import jwt from "jsonwebtoken";

const router = express.Router();
router.use(express.json());

//get users by email - url params
router.get('/:email', async function(req, res){
    const {email} = req.params;
    console.log(req.params, email);

    const user = await getUserByEmail(email);
    console.log(user);

    user ? res.send(user) : res.send("User does not exist");
});

//get users, involve query params
router.get('/', async function(req, res){
    console.log(req.query);
    const user = await getUsers(req);
    //console.log(user);

    user ? res.send(user) : res.send("User does not exist");
});

//create user
router.post('/createUser', async function(req, res){
    const data = req.body;
    const creationResult = await createUser(data);
    console.log(creationResult);
    res.send(creationResult);
});

//user login


//update user
//delete user


export const usersRouter = router;