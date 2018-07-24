var express = require('express');
var app = express();

app.set("view engine" , "ejs");

app.get('/', function (req, res) {
  res.render('index');
  console.log("Кто-то наехал на мою главную страницу , кожаный ублюдок!")
});

app.get('/info', function (req, res) {
    res.render('info');
    console.log("Ей , кожаный мешок ! Кто-то на тебя копает!")
  });

app.get('/sad', function(req , res){
    res.render('sad');
    console.log('Ублюдок, а ты хочешь в садик ?');
});

app.get('/reg' , function(req, res){
    res.render('reg');
    console.log('Мешок , тут твои друзья появились !')
})

app.listen(3000, function () {
  console.log('Сервер пашит , а ты нет , кожаный мешок !');
});