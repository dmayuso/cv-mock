import { RoutesService } from "../services/routes-service";

const express = require('express');
const router = express.Router();
import { Request, Response } from "express";

const routesService = new RoutesService();

router.get('/', function (req: Request, res: Response) {
    res.status(200).send("Mock CV status OK");
});

routesService.getControllersInfo().forEach(function(controllerInfo) {
    router[controllerInfo.service.method]('/' + controllerInfo.service.url, function (req: Request, res: Response) {
        const response = controllerInfo.response;
        res.status(controllerInfo.service.httpStatus);
        res.json(response);
    });
});

module.exports = router;
