var express = require('express');
var params = {screen_name: 'nodejs'};
var app = express();
 app.use(express.static('public'))
 app.get('/', function(req, res){
   client.get('statuses/user_timeline', params, function(error, tweets, response) {
 if (!error) {
 console.log(tweets);
 }
});
 res.send("Hello world! by express");
});
app.listen(8080);


var express = require('express');
var app = express();
var Twitter = require('twitter');
var client = new Twitter({
 consumer_key: 'g98jHP1lHhfofUSYVVEUcYElG',
 consumer_secret: '6nyKR60Kfb4Bt9q4dGFAwwzrQ9GmA9ydFLWjE3AwUuCpUsi0T7s',
 access_token_key: '976065842763968513-rQLLQ3jqkkHumyUjZwmbm5j5vxjq8Wy',
 access_token_secret: '2kVeaY3JmPTM5IDwyyAUNMBYmRKUKqjOhRzYd23gBKQtF'
});
app.use(express.static('public'))
app.get('/'
, function(req, res){
 res.send("Hello world! by express");
});
app.listen(8080);
