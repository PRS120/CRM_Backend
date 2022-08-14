import { client } from "../index.js";


export async function getUserByEmail(emailId){
    return await client
    .db('crmdb')
    .collection('users')
    .findOne({EMail: emailId});
}

export async function createUser(data){
    return await client
    .db('crmdb')
    .collection('users')
    .insertMany(data);
}