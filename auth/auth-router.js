const router = require('express').Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Users = require('./users-model')

router.post('/register', validateMe, (req, res) => {
  
  req.body.password = bcrypt.hashSync(req.body.password, 8)

  Users.addUser(req.body)
       .then(user => {
         res.status(201).json(user)
       })
       .catch(error => {
         res.status(500).json({message: "error adding user"})
       })
})

router.post('/login', (req, res) => {
  Users.findBy(username)
       .first()
       .then(user => {
         if(user && bcrypt.compareSync(req.body.password, user.password)){
           res.status(200).json({message: `Welcome ${res.body.username}`, token: assignToken(user)})
         }
       })
})

function validateMe(req, res, next) {
  if(req.body.password && req.body.username){
    next()
  }else{
    res.status(500).json({message: "please enter username and password"})
  }
}

function assignToken(user) {
  const payload = {
    subject: user.id
  }
  const options = {
    expiresIn: '1h',
  }

  return jwt.sign(payload, "Mai-ia-hii Mai-ia-huu Mai-ia-haa Mai-ia-ha ha", options)
}

module.exports = router
