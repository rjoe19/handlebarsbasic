var express = require('express');
var app = express(); // setup instance of express
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));  // set view engine to handlebars
app.set('view engine', 'handlebars');

app.get('/', function(req,res){
  var luckyNumber = Math.round(Math.random() * 10);
  res.render('index',
      {luckyNumber: luckyNumber});  // create dynamic views, luckyNumber changes  randomly
});

app.get('/about', function(req,res){
  res.render('about');  // route will by default serve files in public folder
});

app.use('/public', express.static('public'));

var port = Number(process.env.PORT || 5000);
app.listen(port);
