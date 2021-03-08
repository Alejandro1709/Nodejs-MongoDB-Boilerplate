const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const port = process.env.PORT || 3030;

app.listen(port, () => console.log(`Serveris up and running on port: ${port}`));
