const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

app.use(cors())

const catagories = require('./data/catagories.json')
const news = require('./data/news.json')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/news_catagories', (req, res) => {

    res.send(catagories)
})

app.get('/newsDetails/:id', (req, res) => {

    // console.log(req.params.id)
    const newsId = req.params.id
    const selectedNews = news.find(n => n._id === newsId)
    res.send(selectedNews)
})

app.get('/catagory_news/:id', (req, res) => {

    const id = req.params.id
    const selectedCatagory = news.filter(n => n.category_id === id)
    res.send(selectedCatagory)
})

app.get('/catagory_news/01', (req, res) => {

    res.send(news)
})

app.get('/all_news', (req, res) => {

    res.send(news)
})

app.listen(port, () => {
    console.log(`App run on port ${port}`)
});