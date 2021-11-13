const express = require('express')
const router = express.Router()

// @route GET users
// @desc 
// @access public
router.get('/',(req,res) => res.send('User route'))

module.exports = router