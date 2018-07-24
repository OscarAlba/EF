const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname + "/src/")));

app.get(/.*/, function(req, res){
  res.sendfile(__dirname+"/index.html");
});

app.listen(port);

console.log('Server Started...');
