const express = require('express')
var cors = require('cors')
const app = express();
const dotenv = require('dotenv')
const mongoose = require("mongoose")
const userRoute = require('./routes/user')
const auth = require('./routes/auth')
const productRoute = require('./routes/product')
const orderRoute = require('./routes/order')
const cartRoute = require('./routes/cart')
dotenv.config()

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));


app.use(cors({ origin: 'http://localhost:3000', }))
app.use(express.json())

app.use('/api/auth', auth)
app.use('/api/user', userRoute)
app.use('/api/products', productRoute)
app.use('/api/cart', cartRoute)
app.use('/api/order', orderRoute)


app.listen(process.env.PORT || 8080, () => {
    console.log("Server is running... ");
})