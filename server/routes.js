const express = require('express');
const mongoose = require('mongoose');
const SlowLoris = require('../server/models/SlowLoris');
const baseUrl = '/api';
const router = express.Router();
require('../server/models/connectDB');

// Middleware to handle requests passed from server to client
const getSlowLorisData = async (req, res, next) => {
  let slowLorisData
  let ID = req.params.id
  try {
    if (!mongoose.isValidObjectId(ID)) {
      return res.status(404).json({ message: "Error: cannot find slow loris data..." })
    }
    slowLorisData = await SlowLoris.findById(ID)
      if (slowLorisData == null) {
        return res.status(404).json({ message: "Error: cannot find slow loris data..." })
      }
    res.slowLorisData = slowLorisData
    next()
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
}

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
router.get(`${baseUrl}/:id`, getSlowLorisData, (req, res) => {
  res.send(res.slowLorisData)
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
      if (slowLorisByScientificName.length === 0) {
        res.status(404).json({ message: "Error: data not found..."})
        return
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
      if (slowLorisByCommonName.length === 0) {
        res.status(404).json({ message: "Error: data not found..."})
        return
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
      if (slowLorisByHabitat.length === 0) {
        res.status(404).json({ message: "Error: data not found..." })
        return
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
      if (slowLorisByStatus.length === 0) {
        res.status(404).json({ message: "Error: data not found..." })
        return
      }
      res.json(slowLorisByStatus)
    })
  } catch (err) {
    res.json({ message: err.message })
  }
})

module.exports = router