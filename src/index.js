const express = require('express');
const app = express();
app.use(express.json());

const passport = require('./configs/passport');
const {register , login} = require('./controllers/auth.controller');

const userController = require('./controllers/user.controller');
const signinController = require('./controllers/signin.controller');

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

module.exports = app; 