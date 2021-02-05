const express = require("express");
const cors = require("cors"); //prevent CORS

const app = express();

//create endpoint here

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
