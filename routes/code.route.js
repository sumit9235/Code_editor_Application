const express = require('express')
require("dotenv").config()
const { Configuration, OpenAIApi } = require('openai');
const chatRouter=express.Router()


const config = new Configuration({
    apiKey: `${process.env.OPEN_AI_KEY}`,
});

const openai = new OpenAIApi(config);

chatRouter.post('/chat', async (req, res) => {

    const payload = req.body.payload;

    try {
        const prompt = `Give me famous Quote about +${payload}`;

        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: prompt,
            max_tokens: 2048,
            temperature: 1,
        });

        const textResponse = response.data.choices[0].text;
        let text=textResponse;
        text = text.slice(3, -1);
        res.json({ "ans": `${text}` });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
});

module.exports={
    chatRouter
}
