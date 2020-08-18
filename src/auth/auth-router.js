const router = require("express").Router();
const bcrypt = requrie("bcryptjs");
const User = require("../auth/auth-model");

router.post("/register", (req, res) => {
  const { username, password, department } = req.body;

  const hash = bcrypt.hashSync(password);

  User.add({ username, passoword: hash })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(500).json({ error: "could not register" });
    });
});

module.exports = router;
