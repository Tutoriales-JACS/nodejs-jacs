const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.send({msg: 'Bienvenido a la v1'});
});

module.exports = router;