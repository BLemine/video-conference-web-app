import express from 'express';
import fs from 'fs';
import path from "path";
import React from 'react';
import ReactDOMServer from 'react-dom/server'
import App from '../src/App'
import Room from '../src/Room'
const app = express();
const bodyParser = require('body-parser');


app.use("^/$", (req, res, next) => {
    fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Check it please !")
        }
        return res.send(data.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`))
    })
})

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

  
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.listen(9110, () => {
    console.log(`Server is listening on port 9110 ..`);
});