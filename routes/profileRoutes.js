const express = require('express')
const router = express.Router()

// @route GET profile
// @desc 
// @access public
router.get('/',(req,res) => res.send('Profile route'))

module.exports = router