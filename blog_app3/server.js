const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())
const port = process.env.PORT || 8080
const uri = process.env.ATLAS_URI

mongoose.connect('mongodb://localhost/blog', 
    {useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true})

const connection = mongoose.connection
connection.once('open', () => console.log("Database connection established !"))

const articleRouter = require('./routes/articles')
app.use('/articles', articleRouter)

app.listen(8080, () => console.log("App is running !"))