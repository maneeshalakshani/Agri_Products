const mongoose = require('mongoose');

//Msg Schema
const MsgSchema = new mongoose.Schema({
    ename: { type: String, required: true },
    eemail: { type: String, required: true },
    emessage: { type: String, required: true },
});

const Msg = new mongoose.model("Message", MsgSchema)
module.exports = Msg;