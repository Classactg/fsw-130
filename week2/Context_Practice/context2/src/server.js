const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

//Middleware (for every request) //
app.use(express.json())
app.use(morgan('dev'))

// Connect to DB
mongoose.connect('mongodb://localhost:27017/moviesdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
() => console.log("Connect to the DB")
)

// Routes //
app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvshows", require('./routes/movieRouter'))

// Error handler
app.use((err, req, res,next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})