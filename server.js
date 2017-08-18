var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var path = require('path');
const fileUpload = require('express-fileupload');

app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());
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

app.post('/upload', function(req, res) {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file 
  let sampleFile = req.files.sampleFile;

  console.log(req.files.file);
  // console.log(sampleFile);

  // Use the mv() method to place the file somewhere on your server 
  req.files.file.mv('./' + req.files.file.name, function(err) {
    if (err)
      return res.status(500).send(err);
 
    res.send('File uploaded!');
  });
});

app.listen(3000, function(){
  console.log('listening on *:3000');
});

