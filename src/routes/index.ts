const express = require('express');
const router = express.Router();
import { Request, Response } from "express";

router.get('/', function (req: Request, res: Response) {
    res.status(200).send("Mock CM status OK");
});

module.exports = router;
