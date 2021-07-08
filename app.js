const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("This is the top route in the Blog Post API");
});

require("./src/routes/blogposts.route")(app);
require("./src/routes/user.route")(app);
require("./src/routes/todo.route")(app);

app.listen(3000, function () {
  console.log("App listening on port 3000");
});
