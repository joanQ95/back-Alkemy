"use strict";
require("dotenv").config();
const { User } = require("../db");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../../config/auth');

async function signIn(req, res) {
    let { email, password } = req.body;
    User.findOne({ where: { email } }).then(user => {
        if (!user) {
            res.status(404).json({ msg: "User not found" });
        } else {
            if (bcrypt.compareSync(password, user.password)) {
                let token = jwt.sign({ user: user }, authConfig.secret, {
                    expiresIn: authConfig.expires
                });
                res.json({
                    user: user,
                    token: token
                })
            } else {
                res.status(401).json({ msg: "Invalid Password" })
            }
        }
    }).catch(err => {
        res.status(500).json(err);
    })
}

async function signUp(req, res) {
  let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));
  User.create({
      name: req.body.name,
      email: req.body.email,
      password: password
  }).then(user => {
      let token = jwt.sign({ user: user }, authConfig.secret, {
          expiresIn: authConfig.expires
      });
      res.json({ user: user, token: token });
  }).catch(err => {
      res.status(500).json(err);
  });
}

module.exports = {
    signIn,
    signUp
  };