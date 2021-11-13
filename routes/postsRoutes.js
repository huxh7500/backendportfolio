const express = require('express')
const router = express.Router()

// @route GET posts
// @desc 
// @access public
router.get('/',(req,res) => res.send('Posts route'))

module.exports = router