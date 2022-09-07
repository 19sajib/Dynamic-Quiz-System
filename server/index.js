import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser'


import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'
import QuizRoute from './Routes/QuizRoute.js'


const app = express()
dotenv.config()


// Middleware

app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())

// Server setting 

const PORT = process.env.PORT ||7070;
const server = app.listen(PORT, ()=> console.log(`Server is up and running on port: ${PORT}`));

// DB setting

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if(err) return console.log(err);
    console.log('MongoDB connected...')
})

// Routes
app.use('/auth', AuthRoute)
app.use('/user', UserRoute)
app.use('/quiz', QuizRoute)