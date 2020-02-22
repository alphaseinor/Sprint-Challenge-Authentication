const router = require('express').Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Users = require('./users-model')



router.post('/register', (req, res) => {
  res.status(200).json(req.body)
})

router.post('/login', (req, res) => {
  res.status(200).json(req.body)
})

module.exports = router;
