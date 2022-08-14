const express = require("express");
const app = express();
const errorHandler = require("./Middleware/error");
const cookieParser = require("cookie-parser") ;
const cors = require('cors');

app.use(express.json());
app.use(cookieParser());
app.use(cors());
// Route imports
const product = require("./Routes/ProductRoute");
const user = require("./Routes/UserRoute");
const order = require("./Routes/OrderRoute");
app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);
// middleware for error
app.use(errorHandler)
module.exports = app