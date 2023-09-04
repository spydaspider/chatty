const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(
    app.listen(port,()=>{
    console.log(`Server has started ${port}`)
    })).catch((err)=>console.error(err));