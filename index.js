const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.listen(5000, () => {
  console.log("Running on port 5000.");
});
