const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const uri =
  "mongodb+srv://admin:admin@cluster0.70iii4j.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();

app.use(express.json());
app.use("/api", routes);

app.listen(5000, () => {
  console.log("Running on port 5000.");
});
