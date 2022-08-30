import { v4 as uuid } from 'uuid';
import {con} from '../db/db.js';
let users = [];

export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
}

export const createUser = (req, res) => {   
    // store all the user input data

    const user = req.body;
 
    // insert user data into users table
    var sql = 'INSERT INTO Tamu (Name, Address, Phone, Note) values';
    var data = '("' + user.Name +'","' + user.Address +'","' +user.Phone+'","' +user.Note +'");'
    console.log(" data query" + sql + data);
    con.query(sql + data,function (err, data) { 
        if (err) throw err;
        console.log("User data is inserted successfully "); 
  });
    console.log(`User [${user.name}] added to the database.`);
    res.send("User data is inserted successfully ")
};

export const getUser = (req, res) => {
    res.send(req.params.id)
};

export const deleteUser = (req, res) => { 
    console.log(`user with id ${req.params.id} has been deleted`);
    
    users = users.filter((user) => user.id !== req.params.id);
};

export const updateUser =  (req,res) => {
    
    const user = req.body;
    const id = req.params.id;
    const i = 0;
    const idFinal = 0;
    // while (true){
    //     if (i === id){
    //         idFinal = id;
    //         break;
    //     } else{
    //         i = i + 1;
    //     }
    // }
    // console.log(idFinal, "wwwwwwwwwwwwwwww");
    // update user data into users table
    // Aneh
    var sql = 'UPDATE Tamu set ';
    var data = 'Name = "' + user.Name +'", Address = "'  + user.Address +'", Phone = "' +user.Phone+'", Note = "' +user.Note +'" where Tamu_id = ' + id;
    con.query(sql + data,function (err, data) { 
        if (err) throw err;
        console.log("User data is update successfully "); 
  });
    console.log(`User [${user.name}] added to the database.`);
    res.send("User data is update successfully ")
};