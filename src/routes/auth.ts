const express = require("express");
const passport = require('passport');
const bcrypt = require("bcrypt");

import { User } from '../models/index';

const router = express.Router();

import { NextFunction, Request, Response } from 'express';
import IDataUser from "../interfaces/IDataUser";

router.get('/loggedin', (req: Request, res: Response, next: NextFunction) => {
    if (req.user) {
        res.status(200).json(req.user);
    } else {
        res.status(500).json({ message: "Not Logged in" })
    }
})

router.post("/login", (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate("local", (err: Error, user: IDataUser, failureDetails: any) => {
        if (err) res.status(500).json({ message: 'Error in the authentication' })
        if (!user) res.status(500).json({ message: failureDetails })
        else {
            req.login(user, (err: Error) => {
                if (err) res.status(500).json({ message: 'Error in the authentication' });
                else {
                    res.status(200).json({ message: "Ok" });
                }
            })
        }
    })(req, res, next)
});

router.post("/signup", (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    if (username === "" || password === "") {
        res.status(500).json({ message: "Error Fields aren't Filled" })
    }
    else {
        User.findOne({ username }, "username", (err: Error, user: IDataUser) => {
            if (user !== null) {
                res.status(500).json({ message: "The username already exists" });
            } else {
                const newUser = new User({
                    username,
                    password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
                })
                newUser.save()
                    .then(() => res.status(200).json({ message: "Ok" }))
                    .catch((err: Error) => {
                        res.status(500).json({ message: err + "Something went wrong" });
                    })
            }
        });
    }
});

router.get("/logout", (req: Request, res: Response) => {
    req.logout();
    res.status(200).json({ message: "Ok" });
});

module.exports = router;