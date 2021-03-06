require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT; // 5000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));

// DB connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useFindAndModify: true,
    useCreateIndex: true,
  })
  .then((db) => console.log(`Connected! Database name: ${db.connections[0].name}`))
  .catch((err) => console.log("Error connecting to Mongo: ", err));

// route prefix
app.use("/api/equipamento", require("./routes/routes"));

//start server
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
