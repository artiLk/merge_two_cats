const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const catRoutes = require("./src/routes/catRoutes");
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/v1/api/cats", catRoutes);

app.listen(PORT, () => console.log(`server is running in Port ${PORT}`));
