const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;
const server = app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})