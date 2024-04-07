const express = require('express')
const newsRouter = express.Router()
const axios = require('axios') //helps in error handling in parsing

//homepage - top headlines
newsRouter.get('/',async(req,res)=>{
    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY`) //get data from url
        // const newsAPI = await axios.get(`https://gnews.io/api/v4/search?q=example&apikey=YOUR_API_KEY`) //another news api source
        res.render('news',{articles : newsAPI.data.articles}) //the ejs page
    } catch (err) {
        if(err.response){
            res.render('news',{articles : null})
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.header)
        }else if(err.request){//handles server requests that return no response
            res.render('news',{articles : null})
            console.log(err.request)
        }
        else{
            res.render('news',{articles : null})
            console.log('Error',err.message)
        }
    }
})

//category headlines
newsRouter.get('/:category',async(req,res)=>{
    let categoryName = req.params.category
    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${categoryName}&apiKey=YOUR_API_KEY`) //get data from url

        res.render('category',{articles : newsAPI.data.articles, category: categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}) 
    } catch (err) {
        if(err.response){
            res.render('category',{articles : null})
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.header)
        }else if(err.request){
            res.render('category',{articles : null})
            console.log(err.request)
        }
        else{
            res.render('category',{articles : null})
            console.log('Error',err.message)
        }
    }
})

//each article expand
newsRouter.get('/article/:title',async(req,res)=>{
    let articleName = req.params.title
    // console.log(articleName)
    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&q=${articleName}&apiKey=YOUR_API_KEY`)
        console.log(newsAPI.data.articles)
        res.render('singlearticle',{article : newsAPI.data.articles}) 
    } catch (err) {
        if(err.response){
            res.render('singlearticle',{article : null})
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.header)
        }else if(err.request){
            res.render('singlearticle',{article : null})
            console.log(err.request)
        }
        else{
            res.render('singlearticle',{article : null})
            console.log('Error',err.message)
        }
    }
})

//search functionality
newsRouter.post('/',async(req,res)=>{
    let search = req.body.search
    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=YOUR_API_KEY`)
        res.render('newsSearch',{articles : newsAPI.data.articles}) 
    } catch (err) {
        if(err.response){
            res.render('newsSearch',{articles : null})
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.header)
        }else if(err.request){
            res.render('newsSearch',{articles : null})
            console.log(err.request)
        }
        else{
            res.render('newsSearch',{articles : null})
            console.log('Error',err.message)
        }
    }
})

module.exports = newsRouter