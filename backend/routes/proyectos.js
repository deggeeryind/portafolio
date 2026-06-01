const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      nombre: "Portafolio Personal",
      tecnologia: "HTML, CSS y JavaScript"
    }
  ]);
});

module.exports = router;