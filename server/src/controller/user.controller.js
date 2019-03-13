const User = require("../model/user.model");

exports.findAll = (req, res) => {
  User.findOne()
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
};

exports.create = (req, res) => {
  const user = new User(req.body);
  user.save().then(user => {
    return res.json(user);
  });
};
