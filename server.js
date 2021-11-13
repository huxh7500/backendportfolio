const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db.js') 


const app = express()
dotenv.config()
connectDB()

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/users', require('./routes/userRoutes.js'))
app.use('/profile', require('./routes/profileRoutes.js'))
app.use('/posts', require('./routes/postsRoutes.js'))
app.use('/auth', require('./routes/authRoutes.js'))

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000
app.listen(
    PORT, () =>
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
  )