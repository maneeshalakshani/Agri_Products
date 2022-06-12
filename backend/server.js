//Import All Dependencies
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))

//Routes
app.use('/user', require('./routes/userRoute'));
app.use('/api', require('./routes/categoryRoute'));
app.use('/api', require('./routes/upload'));
app.use('/api', require('./routes/productRoutes'));
app.use('/api', require('./routes/paymentRoute'));
app.use('/api', require('./routes/MsgRoute'));
app.use('/api/mobilepay', require('./routes/mobilepay'));


//Connect to MongoDB
const URI = process.env.MONGO_URI
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err =>{
    if(err) throw err;
    console.log('Connected to MongoDB')
});

//Connect to the Server
const PORT = process.env.PORT || 5100
app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
});