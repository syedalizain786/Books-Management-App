const express = require('express')
const connect = require("./config")
const app = express()
const PORT = 5000
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authBook = require('./routes/books')


app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use('/api/books', authBook)

app.get('/', (req,res) =>{
    console.log("Request logged");
    return res.status(200).send("Welcome to Book Store")
})

app.listen(PORT, ()=>{
    connect()
    console.log(`App is running on the port ${PORT}`);
})