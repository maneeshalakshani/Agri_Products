const mongoose = require('mongoose')

//create categorySchema
const categorySchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Category", categorySchema)