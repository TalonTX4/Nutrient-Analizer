// imports
const { aiColorPicker } = require("../../misc/openai/ai generation")
const { isHTMLColor } = require("../../misc/colorValidator")

describe("color picker tests", () => {
    test("normal case", async () => {
        let potatoCase = await aiColorPicker("potato")
        let appleCase = await aiColorPicker("apple")
        let lemonCase = await aiColorPicker("lemon")
        expect(isHTMLColor(potatoCase)).toBe(true)
        expect(isHTMLColor(appleCase)).toBe(true)
        expect(isHTMLColor(lemonCase)).toBe(true)
    })
})