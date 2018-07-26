var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/schools");
app.set("view engine" , "ejs");

//Схема для школ 
var schoolsShema = new mongoose.Schema({
  name : String,
  image : String,
  site : String 
});

var schools = mongoose.model("schools" , schoolsShema);

schools.create({
  name : "№329 'Логос'",
  image : "http://logos.kiev.ua/pix/main.jpg",
  site : "http://logos.kiev.ua/"
}) , 
function(err , schools){
  if(err){
    console.log("Вот такую фигню ты сделал , кожаный мешок");
    console.log(err);
  }
  else{
    console.log("И что ты здесь выучишь ? ");
    consoele.log(schools);
  }
}
app.get('/', function (req, res) {
  res.render('index');
  console.log("Кто-то наехал на мою главную страницу , кожаный ублюдок!")
  schools.find({} , function(err , schools){
    if(err){
      console.log(err);
    }
    else{
      res.render('index' , {schools : schools});
    }
  });
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

/*
Пользаватеь в фильтрах указывает значание
Значиние передаётся в виде переменных 
Переменные передаются в db.find
Дальше из db.find мы достаём нужные намданные 
Делаем вывод в виде карточек 
*/