// imports
const express = require("express")
const app = express()

// init middleware
app.use(express.json())

// defining routes
app.use("/api/ui", require("./routes/api/ui/index"))

// export app to use in index and testing
module.exports = app