let express = require("express");
let app = express();

function getIndex(req, res) {
  res.send("Hello Express");
}
// function getAdaAnimation(req, res) {
//   res.send("/ada-animation.html");
// }

// app.get("/ada-animation", getAdaAnimation);
app.get("/", getIndex);

module.exports = app;
