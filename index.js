const express = require('express')
const cors = require('cors')

const app = express()

const port = 5000

app.use(cors());

const categories = require('./data/categories.json');

const news = require('./data/allNews.json');

app.get('/' ,(req , res)=>{
    res.send("The Dragon Data Server")
});
app.get('/categories' , (req , res)=>{
    res.send(categories)
});
app.get('/news' , (req , res)=>{
    res.send(news)
});
app.get('/news/:id' , (req,res)=>{
    const id = req.params.id;
    const selectedNews = news.find(n=> n._id === id);
    res.send(selectedNews);
})
app.listen(port,()=>{
    console.log(`This server lister on port ${port}`);
})