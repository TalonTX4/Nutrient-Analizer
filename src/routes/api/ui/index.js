// imports
const express = require("express")

// var setup
const router = express.Router()

// sub-routes
router.use("/color", require("./color"))

module.exports = router