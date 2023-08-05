const express=require('express');
const { Configuration, OpenAIApi } = require('openai');
require("dotenv").config()
const codeRouter=express.Router()
const config = new Configuration({
    apiKey: `${process.env.OPEN_AI_KEY}`,
});
const openai = new OpenAIApi(config);
codeRouter.post("/converter",async(req,res)=>{
    const payload=req.body.payload;
    const language=req.body.language;
    const conversion=`Convert this ${payload} code in this ${language} language code. with proper explainantion`
    try {
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: conversion,
            max_tokens: 2048,
            temperature: 1,
        });
        const textResponse = response.data.choices[0].text;
        let text=textResponse;
        res.send({text})
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})


codeRouter.post("/debugging",async(req,res)=>{
    const payload=req.body.payload;
    const conversion=`Debug this ${payload} code for error with proper explainantion`
    try {
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: conversion,
            max_tokens: 2048,
            temperature: 1,
        });
        const textResponse = response.data.choices[0].text;
        let text=textResponse;
        res.send({text})
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

codeRouter.post("/quality_check",async(req,res)=>{
    const payload=req.body.payload;
    const conversion=`Check this ${payload} code for proper code quality, And give the correct syntax as well`
    try {
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: conversion,
            max_tokens: 2048,
            temperature: 1,
        });
        const textResponse = response.data.choices[0].text;
        let text=textResponse;
        res.send({text})
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})


module.exports={
    codeRouter
}