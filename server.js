const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

console.log('Server Started...1');
app.use(express.static(__dirname + "/dist/"));
console.log('Server Started...2');
app.get(/.*/, function(req, res){
  res.sendfile(__dirname +"/dist/index.html");
});

app.listen(port);

console.log('Server Started...3');
