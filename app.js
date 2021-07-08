const express = require("express");

const app = express();

// add top-level route handler
app.get("/", function (req, res) {
  res.send("You have reached the top-level route handler with a GET");
});

// add student routes
require("./src/routes/student.route")(app);

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
