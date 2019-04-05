import express = require('express');
const bodyParser = require("body-parser");

import { RoutesService } from './services/routes-service';


const app: express.Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const routesService = new RoutesService();
const getUrl = routesService.getRoute();
console.log('URL -> ' + getUrl);

app.get('/' + getUrl, function (req, res) {
    const routes = routesService.getResponse();
    console.log(routes);
    res.json(routes);
});

app.get('/', function (req, res) {
    res.send("Mock CM status OK");
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

