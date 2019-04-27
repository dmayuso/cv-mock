import express = require('express');
import mongoose from 'mongoose';
import { configuration } from './configuration/appConfig';

const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const apiRouter = require("./routes/api/index");


const app: express.Application = express();
const port: number = configuration.app.port;
const db: string = configuration.db.host;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then((x: any) => {
        console.log(`Connected to Mongo! Database name: ${x.connections[0].name}`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/api", apiRouter);

app.listen(port, function () {
    console.log(`App listening on port: ${port}`);
});

