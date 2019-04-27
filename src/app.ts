import express = require('express');
import { configuration } from './configuration/appConfig';

const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const apiRouter = require("./routes/api/index");


const app: express.Application = express();
const port: number = configuration.app.port

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/api", apiRouter);

app.listen(port, function () {
    console.log(`App listening on port: ${port}`);
});

