const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const uploadRouter = require('./routes/upload');
const userRouter = require('./routes/user');
const cors = require('cors');
const CarBookinRouter = require('./routes/BookingCar');
const BikeBookingRouter = require('./routes/BookingBike');



mongoose.connect(process.env.DB,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true}).then((db) =>
{
console.log("Sucessfully connected mongodb server");
})

const app = express();
app.options('*',cors());
app.use(cors());
app.use(express.static(__dirname + "/public"));



app.use(express.json());
app.use('/users',userRouter);
app.use('/upload', uploadRouter);

app.use('/bikebooking', BikeBookingRouter);
app.use('/carbooking',CarBookinRouter);


app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`);
});

