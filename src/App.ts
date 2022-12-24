import {NextFunction, Request, Response} from "express";

const express = require('express');
const dotenv = require('dotenv');
const app = express();
const mongoose = require('mongoose');

const postRoutes = require('./routes/postRoutes');


dotenv.config();

app.use(express.json());

mongoose.set('strictQuery', false);
mongoose.connect(`${process.env.MONGO_URL}`,
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Database connected successfully'))
    .catch((err:any) => console.log('Connection to MongoDB failed: '+err));


app.use((req:Request, res:Response, next:NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next();
});

/*
Routes
*/
app.use('/posts', postRoutes);


module.exports = app;