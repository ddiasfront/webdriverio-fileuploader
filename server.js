var bodyParser = require('body-parser');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.set('view engine', 'hjs');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/', function(req, res){
  res.render('index', {
    title: 'My Test App',
  });
});

app.post('/test-page', function(req, res) {
    var name = req.body.name,
        city = req.body.city;
    console.log(name, city);
    // ...
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

