const express = require('express');
const router = express.Router();
require('../server/models/connectDB');
const SlowLoris = require('../server/models/SlowLoris');
const baseUrl = '/api';

// GET - test route
router.get(['/', `${baseUrl}/`], (req, res) => {
  res.send("Welcome to the Slow Loris API!")
})

// GET - all data of slow lorises
router.get(`${baseUrl}/all`, (req, res) => {
  try {
    SlowLoris.find().then(slowLorisData => {
      res.json(slowLorisData)
    })
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
})

// GET - slow loris by ID
router.get(`${baseUrl}/:id`, (req, res) => {
  let ID = req.params.id
  try {
    SlowLoris.findById(ID).then(slowLorisByID => {
      if (ID == null) {
        res.status(404).json({ message: "Error: data not found..."})
      }
      res.json(slowLorisByID)
    })
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
})

//  GET - slow loris by scientific name
router.get(`${baseUrl}/scientific/:scientific`, async (req, res) => {
  let scientificName = req.params.scientific
  try {
    SlowLoris.find({ 
      "scientific_name": {
        $regex: scientificName,
        $options: "i"
      }
    }).then(slowLorisByScientificName => {
      if (scientificName == null) {
        res.status(404).json({ message: "Error: data not found..."})
      }
      res.json(slowLorisByScientificName)
    })
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
})

//  GET - slow loris by common name
router.get(`${baseUrl}/common/:common`, (req, res) => {
  let commonName = req.params.common
  try {
    SlowLoris.find({
      "common_name": {
        $regex: commonName,
        $options: "i"
      }
    }).then(slowLorisByCommonName => {
      if (commonName == null) {
        res.status(404).json({ message: "Error: data not found..."})
      }
      res.json(slowLorisByCommonName)
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

//  GET - slow lorises by native habitat
router.get(`${baseUrl}/habitat/:habitat`, (req, res) => {
  let habitat = req.params.habitat
  try {
    SlowLoris.find({
      "distribution": {
        $regex: habitat,
        $options: "i"
      }
    }).then(slowLorisByHabitat => {
      if (habitat == null) {
        res.status(404).json({ message: "Error: data not found..." })
      }
      res.json(slowLorisByHabitat)
    })
  } catch (err) {
    res.json({ message: err.message })
  }
})

//  GET - slow lorises by conservation status
router.get(`${baseUrl}/status/:status`, (req, res) => {
  let status = req.params.status
  try {
    SlowLoris.find({
      "conservation_status": {
        $regex: status,
        $options: "i"
      }
    }).then(slowLorisByStatus => {
      if (status == null) {
        res.status(404).json({ message: "Error: data not found..." })
      }
      res.json(slowLorisByStatus)
    })
  } catch (err) {
    res.json({ message: err.message })
  }
})

module.exports = router