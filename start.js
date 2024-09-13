const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require('path');



const transactionRoutes = require('./src/routes/transactionRoutes').router;



const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// Set up session and cookie middleware
app.use(cookieParser());
app.set("views", path.join(__dirname, "src/views"));
app.use(express.static(__dirname + "/src/public"));



app.use("/api", [
    transactionRoutes
]);


app.listen(PORT, () => {
    console.log(`Server started on port ${ PORT }`);
}).on("error", err => {
    console.log("ERROR: ", err);
});
