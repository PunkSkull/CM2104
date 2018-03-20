var express = require('express');
var app = express();
var Twitter = require('twitter');
var params = {screen_name: 'nodejs'};
var client = new Twitter({
 consumer_key: 'g98jHP1lHhfofUSYVVEUcYElG',
 consumer_secret: '6nyKR60Kfb4Bt9q4dGFAwwzrQ9GmA9ydFLWjE3AwUuCpUsi0T7',
 access_token_key: '976065842763968513-rQLLQ3jqkkHumyUjZwmbm5j5vxjq8Wy',
 access_token_secret: '2kVeaY3JmPTM5IDwyyAUNMBYmRKUKqjOhRzYd23gBKQtF'
});
app.use(express.static('public'))
app.get('/', function(req, res){

  client.get('statuses/user_timeline', params, function(error, tweets, response) {
if (!error) {
  var output = "";
    for (var t = 0; t < tweets.length; t++) {
      output += "<div>";
      output += "<h2>" + tweets[t].user.screen_name + "<h2>";
      output += "<p>" + tweets[t].text + "</p>";
      output += "</div>";
    }
  res.send(output);
}
else{
  res.send(error);
}
});
});
app.get('/tweetsjson', function(req, res) {
 var params = {
 screen_name: 'nodejs'
 };
 client.get('statuses/user_timeline', params, function(error, tweets,
response) {
 if (!error) {
 var json = [];
 for (var i = 0; i < tweets.statuses.length; i++) {
 json.push({
 name: tweets.statuses[i].user.name,
 text: tweets.statuses[i].text
 });
 }
 res.send(JSON.stringify(json));
 }
 });
});
app.listen(8080);
