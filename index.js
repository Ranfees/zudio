const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded())
app.set('view engine', 'ejs')

app.use(express.static('static'));
app.use('/style', express.static(__dirname + '/style'));

app.get('/',(req,res)=>{
      return res.render('home')
})

app.get('/women',(req,res)=>{
      return res.render('women')
})

app.get('/men',(req,res)=>{
      return res.render('men')
})

app.get('/ethinic',(req,res)=>{
      return res.render('ethinic')
})

app.get('/footwear',(req,res)=>{
      return res.render('footware')
})

app.get('/loungewear',(req,res)=>{
      return res.render('loungewear')
})

app.get('/zworld',(req,res)=>{
      return res.render('z-world')
})

app.get('/zudionerayou',(req,res)=>{
      return res.render('zudio-near')
})

app.get('/zstories',(req,res)=>{
      return res.render('z-stories')
})

app.get('/giftcard',(req,res)=>{
      return res.render('gift')
})


app.listen(port)