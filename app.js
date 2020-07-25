const express = require("express");

const app = express();

const port = process.env.PORT || 3002;

app.listen(port,(err) => {
    if(err) throw err;
    console.log(`Server is up at port ${port}`);
});

app.get("/",(req,res) => {
res.status(200).send("Running API");
});

app.post("/api/v1/banner",(req,res) => {
   const { bannerMAker } = require("banner-maker");
   bannerMAker(req,res);
});