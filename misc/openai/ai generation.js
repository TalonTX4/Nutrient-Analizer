// imports
const { isHTMLColor } = require("../colorValidator")
const { prompts } = require("./openAiPrompter")

// functions to ensure useful data return
async function aiColorPicker(item, maxAttempts = 5) {
    let attempts = 0
    let validResult = false
    let currentResult

    // repeat the query until you get a valid result or hit max attempts
    while (attempts < maxAttempts && !validResult) {
        currentResult = await prompts.color(item)
        validResult = isHTMLColor(currentResult)
        ++attempts
    }

    if (validResult) {
        return currentResult
    } else {
        console.error(`no valid colors returned after ${attempts} tries, user prompt was: ${item}, resorting to fallback`)
        return "SLATEGRAY"
    }
}

module.exports = {aiColorPicker}