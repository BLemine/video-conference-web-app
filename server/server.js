import express from 'express';
import fs from 'fs';
import path from "path";
import React from 'react';
import ReactDOMServer from 'react-dom/server'
import App from '../src/App'

const app = express();

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
app.get("/auth",(req,res)=>{
    res.send("Welcome");
})
app.listen(2012, () => {
    console.log(`Server is listening on port 2012 ..`);
});