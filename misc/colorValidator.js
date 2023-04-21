// imports
const colorArray = require("../database/fixed value/validHtmlColors")

// construct an array from the name value of each object
let nameArray = colorArray.map(({ name }) => name)

// compare input color to nameArray
function isHTMLColor (color) {
    // used indexOf instead of includes to avoid polyfill in older browsers
    return (nameArray.indexOf(String(color).toUpperCase()) >= 0)
}

module.exports = {isHTMLColor}