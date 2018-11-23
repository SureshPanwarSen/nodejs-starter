const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const request = require("request");

module.exports = app => {
  app.use("/", router);
};

router.get("/", (req, res, next) => {
  res.render("index", {
    title: "Generator-Express MVC"
  });
});

router.get("/es/city", (req, res) => {
  let cityName = req.body.cityName;
  cityName = "bangalore";
  let query = {
    query: {
      match: {
        city: cityName
      }
    },
    size: 100
  };
  request(
    {
      method: "POST",
      uri: "http://localhost:9200/pincode/doc/_search",
      json: query
    },
    function(error, response, body) {
      if (error) {
        return console.error("upload failed:", error);
      }
      console.log("statusCode:", response && response.statusCode);
      console.log("body:", JSON.stringify(body));
      res.json(body);
    }
  );
});

router.get("/es/pincode", (req, res) => {
  let pincode = req.body.pincode;
  pincode = "470226";
  console.log(pincode);
  let query = {
    query: {
      match: {
        pincode: pincode
      }
    },
    size: 100
  };
  request(
    {
      method: "POST",
      uri: "http://localhost:9200/pincode/doc/_search",
      json: query
    },
    function(error, response, body) {
      if (error) {
        return console.error("upload failed:", error);
      }
      console.log("statusCode:", response && response.statusCode);
      console.log("body:", JSON.stringify(body));
      res.json(body);
    }
  );
});
