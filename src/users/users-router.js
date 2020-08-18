const router = require("express").Router();
const protected = require("../auth/protected");

const Users = require("./users-model");

router.get("/", protected, (req, res) => {
  Users.getAll().then((users) => {
    res.status(200).json(users);
  });
});

module.exports = router;
