const compression = require("compression");
const express = require("express");
const {default: helmet} = require('helmet')
const morgan = require("morgan");
const app = express();

// innit middlewares
app.use(morgan("dev")); // use for dev env
// app.use(morgan("combined")) // use for pro env
// app.use(morgan("common")) // similar with combined but doesn't know src from
// app.use(morgan("short")) // time response + status
// app.use(morgan("tiny")) // shorstest
app.use(helmet()) // enhance security for HTTP
app.use(compression()) // compress HTTP data before send

//init db

// init router
app.get("/", (req, res, next) => {
    const strCompress = 'Hello World'
  return res.status(200).json({
    message: "Hello World",
    metadata: strCompress.repeat(1000000)
  });
});

//handing error

module.exports = app;
