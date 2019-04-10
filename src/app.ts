import express = require('express');

const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api/index");


const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/api", apiRouter);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

