const express = require("express");

const userController = require("./controllers/users.controller")

const app=express();
app.use(express.json());



app.use(express.urlencoded());

app.set("view engine", "ejs");
app.use(express.static("./public"));


app.use("/users",userController);

module.exports=app;