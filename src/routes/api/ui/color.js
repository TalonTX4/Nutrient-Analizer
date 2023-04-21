// imports
const express = require("express")
const { aiColorPicker} = require("../../../../misc/openai/ai generation")
const validHTMLColors = require("../../../../database/fixed value/validHtmlColors")
const errorHandler = require("../../../../misc/errorHandler")

// var setup
const router = express.Router()


// @route  : GET ui/color/:object
// @desc   : get html color of a given object
// @access : public
router.get("/:object", async (req, res) => {
    try {
        let colorName = await aiColorPicker(req.params.object, 3)
        colorName = colorName.toUpperCase()

        const isObjNameEqualStr = (element) => (colorName === element.name)

        // find index value of the object with matching name
        const colorObjIndex = validHTMLColors.findIndex(isObjNameEqualStr)

        // get object via index
        const colorObj = validHTMLColors[colorObjIndex]

        res.color(colorObj)
    } catch (err) {
        errorHandler.serverError(res, err)
    }
})

module.exports = router