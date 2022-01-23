const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');

const passport = require('./configs/passport');
const {register , login} = require('./controllers/auth.controller');

const Address = require("./models/address.model")

const userController = require('./controllers/user.controller');
const signinController = require('./controllers/signin.controller');
const productController = require('./controllers/product.controller');
const productapiController = require('./controllers/productapi.controller.');
const cartapiController = require('./controllers/cartapi.controller');
const cartController = require('./controllers/cart.controller');
const paymentController = require('./controllers/payment.controller');
const addressapiController = require('./controllers/addressapi.controller');

app.post("/login", login);
app.post("/register", register);

app.use(passport.initialize());


app.use(express.urlencoded());

app.set("view engine", "ejs");
app.use(express.static("./public"));

passport.serializeUser(function (user, callback) {
    callback(null, user);
  });
  
passport.deserializeUser(function (user, callback) {
    callback(null, user);
});

app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
  );
  
app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
        successRedirect: '/users',  
        failureRedirect: "/auth/google/failure",
    }),
    (req, res) => {
      return res.status(201).json({ user: req.user.user});
    }
);
  
app.get("/auth/google/failure", (req, res) => {
    return res.send("Failure");
});

app.use("/users", userController);
app.use("/users/signin", signinController);
app.use("/users/productsnew", productController);
app.use("/products", productapiController);
app.use("/carts", cartapiController);


app.use("/users/address", addressapiController);
app.use("/users/payment", paymentController);

module.exports = app; 