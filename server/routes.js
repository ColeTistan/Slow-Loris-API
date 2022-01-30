const express = require('express')
const router = express.Router()

// GET - test route
router.get('/', (req, res) => {
    res.send("Welcome to the Slow Loris API!")
})

/* 
Endpoints to add for API:
GET
  - all data of slow lorises
  - slow loris by ID
  - slow lorises by native habitat
  - slow lorises by conservation status
  - random data of a slow loris
*/

module.exports = router