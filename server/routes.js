const express = require('express');
const router = express.Router()
require('../server/models/connectDB');
const SlowLoris = require('../server/models/SlowLoris')
const baseUrl = '/api'

// GET - test route
router.get(['/', `${baseUrl}/`], (req, res) => {
  res.send("Welcome to the Slow Loris API!");
})


// GET - all data of slow lorises
router.get(`${baseUrl}/all`, async (req, res) => {
  try {
    slowLorises = await SlowLoris.find()
    res.json(slowLorises)
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
})

// GET - slow loris by ID
router.get(`${baseUrl}/:id`, async (req, res) => {
  ID = req.params.id
  try {
    const slowLorisByID = await SlowLoris.findById(ID)
    if (slowLorisByID == null) {
      res.status(404).json({ message: "Cannot find slow loris..."})
    } 
    res.json(slowLorisByID)
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
})
//  GET - slow loris by scientific name
//  GET - slow loris by common name
//  GET - slow lorises by native habitat
//  GET - slow lorises by conservation status
//  GET - random data of a slow loris

module.exports = router