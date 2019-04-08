const express = require("express");
const faker = require('faker');
const router = express.Router();
import { Request, Response } from "express";

router.get("/demo", function(req: Request, res: Response) {
    res.status(200).send(
      Array(100)
        .fill(undefined)
        .map(x => faker.helpers.createCard())
    );
});

router.get("/demo/:id", function(req: Request, res: Response) {
    res.status(200).send(
      Array(+req.params.id)
        .fill(undefined)
        .map(x => faker.helpers.createCard())
    );
});

module.exports = router;