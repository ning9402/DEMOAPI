exports.findAll = (req, res) => {
  res.send("you have reached the controller method to return all Students");

  exports.findById = (req, res) => {
    res.send("You asked for student " + req.params.id);
  };
};
