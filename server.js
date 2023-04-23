const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const errorHandler = require("./middleware/error");
const check = require("./middleware/check");
const cors = require("cors");

// Load Config File
// const config = require("./config/config.json");

// //Load env vars
dotenv.config({ path: "./config.env" });

//Connect to database
connectDB();

// Route Files
const products = require("./routes/products");
const getuser = require("./routes/users");

const app = express();

// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }

//Body Parser
app.use(express.json());

const corsOptions = {
  origin: "https://dreamy-dieffenbachia-6d5e2e.netlify.app/",
};

app.use(cors(corsOptions));

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  next();
});

// app.use(express.static(__dirname + "/public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "app/index.html"));
// });

// URLS
app.use("/api/v1/products", products);
app.use("/api/v1/getuser", getuser);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  //Close Server and Exit Process
  server.close(() => {
    process.exit(1);
  });
});
