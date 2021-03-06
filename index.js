import express from "express";
import consign from "consign";

const app = express();

app.set("json spaces", 4);

consign()
    .include("db.js")
    .then("models")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);

app.listen(PORT, () => console.log(`NTask API - Port ${PORT}`));
