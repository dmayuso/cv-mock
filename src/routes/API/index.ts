const express = require("express");
const faker = require('faker');
const router = express.Router();
import { Request, Response } from "express";

router.get("/demo", function(req: Request, res: Response) {
    res.status(200).send(Array(100).fill(faker.helpers.createCard()));
});

module.exports = router;