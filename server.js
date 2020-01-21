var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var routes = require("./controllers/controller");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on http://localhost:" + PORT);
});
