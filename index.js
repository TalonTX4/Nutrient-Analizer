// imports
const app = require("./src/app")
const connectDB = require("./database/")

// use port in env or port 5000
const PORT = process.env.PORT || 5000

connectDB()

// open app on PORT and print PORT to log
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))