const router = require('express').Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Users = require('./users-model')

router.post('/register', (req, res) => {
  //res.status(200).json(req.body)
  req.body.password = bcrypt.hashSync(req.body.password, 8)

})

router.post('/login', (req, res) => {
  res.status(200).json(req.body)
})

function validateMe(req, res, next) {
  if(req.body.password && req.body.username){
    next()
  }else{
    res.status(500).json({message: "please enter username and password"})
  }
}

module.exports = router;
