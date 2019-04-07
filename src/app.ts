import express = require('express');
const bodyParser = require("body-parser");

import { RoutesService } from './services/routes-service';


const app: express.Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const routesService = new RoutesService();

routesService.getControllersInfo().forEach(function(controllerInfo) {
    app[controllerInfo.service.method]('/' + controllerInfo.service.url, function (req, res) {
        const response = controllerInfo.response;
        res.status(controllerInfo.service.httpStatus);
        res.json(response);
    });
});

app.get('/', function (req, res) {
    res.send("Mock CM status OK");
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

