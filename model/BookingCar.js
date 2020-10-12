const mongoose = require('mongoose');

const CarBookingSchema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
contact:{
    type:String,
    required:true
},
brand:{
    type:String,
    required:true
},

model:{
    type:String,
    required:true
},
number:{
    type:String,
    required:true
},

date:{
    type:String,
    required:true
},
time:{
    type:String,
    required:true
},
etime:{
    type:String,
    required:true
}
},{timestamps:true})
module.exports = mongoose.model('carBooking',CarBookingSchema); 