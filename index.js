// Import dependencies
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// configure environment file
dotenv.config();

// create and configure express app
const app = express()
const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// import routes
const routes = require('./server/routes')

// use http endpoints
app.use('/', routes)

// listen on available port
app.listen(port, () => console.log(`listening on port ${port}`))
