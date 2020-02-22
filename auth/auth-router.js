const router = require('express').Router();

router.post('/register', (req, res) => {
  res.status(200).json(req.body)
});

router.post('/login', (req, res) => {
  res.status(200).json(req.body)
});

module.exports = router;
