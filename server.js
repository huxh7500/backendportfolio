const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db.js') 


const app = express()
dotenv.config()
connectDB()

app.get('/',(req,res) => res.send('API Running'))

app.use('/users', require('./routes/userRoutes.js'))
app.use('/profile', require('./routes/profileRoutes.js'))
app.use('/posts', require('./routes/postsRoutes.js'))
app.use('/auth', require('./routes/authRoutes.js'))

const PORT = process.env.PORT || 5000
app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
  )