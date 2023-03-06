const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    row: {
        type: Number,
        required: true,
      },
      number: {
        type: Number,
        required: true,
      },
      status: {
        type: String,
        enum: ['available', 'selected', 'booked'],
        default: 'available',
      },
},{timestrap:true})

module.exports = mongoose.model('Seat',userSchema)