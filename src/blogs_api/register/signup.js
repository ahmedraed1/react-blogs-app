const router = require("express").Router();

router.post("/", (req, res) => {
  const { input, password } = req.body;
  res.json({ status: true });
});

module.exports = router;
