const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const cors = require('cors');


const app = express();
dotenv.config();
const url = process.env.MONGO_URL;

mongoose.connect(url)
    .then(() => { console.log("DB CONNECT") })
    .catch((e) => { console.log(e); });

app.use(express.json());
app.use(cors());
app.use("/api",userRoute);
app.listen(process.env.PORT || 5002, () => console.log(`Example app listening on port ${process.env.PORT || 5002}!`));
