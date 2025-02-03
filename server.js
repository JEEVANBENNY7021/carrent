const express= require('express');
const app = express();

app.use(express.json());

const dbConfig = require ('./db')
const carsRoute =require('./routes/carsRoute')
const usersRoute =require ('./routes/userRoute')
const bookingRoute =require('./routes/bookingsRoute')

const cors = require("cors");

app.use('/api/cars' ,carsRoute)
app.use('/api/users' ,usersRoute)
app.use('/api/bookings' ,bookingRoute)
app.use(cors());

const port =process.env.PORT ||  5000

app.listen(port,()=>console.log(`node server started using nodemon ${port} `));