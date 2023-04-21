const { Configuration, OpenAIApi } = require("openai");

// only use .env if not in production
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

// setup openai configuration
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// function for generic prompts
async function openaiPrompt(prompt) {
    return await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
}

// misc functions to prevent repeat prompts in code elsewhere
function aiColorPicker (input) {
    // TODO compare return to list of all html color names and if no matches re-prompt upto x times then go to fallback and console.log it
    return openaiPrompt(`pick a color from the 140 color names supported by html a normal person would associate with the following object: ${input}`).then(r => {
        return r
    })
}


module.exports = aiColorPicker()