const mongoose = require("mongoose")

//create MobilePaySchema
var MPay = new mongoose.Schema(
    {
    phone: {type: String, required:true, default: 'default No', trim: true},
    amount: {type: String, required:true, default:'default 1200', trim: true},
    pin: {type: String, required:true, default:'default 123456', trim: true},
    }
)

module.exports = mongoose.model('mpays', MPay);