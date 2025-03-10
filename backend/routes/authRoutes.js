const express = require("express");

const {
    registerUser,
    loginUser,
    getUserInfo,
} = require("../controllers/authController");

const Router = express.Router();

Router.post("/register", registerUser);
Router.post("/login", loginUser);
//Router.get("/getUser", protect, getUserInfo);

module.exports = Router;