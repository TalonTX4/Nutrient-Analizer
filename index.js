// imports
const app = require("./src/app")

// use port in env or port 5000
const PORT = process.env.PORT || 5000

// open app on PORT and print PORT to log
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))