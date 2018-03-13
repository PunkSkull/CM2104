var http = require('http');
var oneLinerJoke = require(‘one-liner-joke’);

  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var randomJoke = oneLinerJoke.getRandomJoke();
    //res.write("The date and time are currently: " + currentdate.myDateTime());
    res.end(randomJoke.body);
  }).listen(8080);
