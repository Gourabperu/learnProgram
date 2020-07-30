var express = require('express');
var router = express.Router();
var UserModel  = require('../user/schema');
var jwt = require('jsonwebtoken');




// create a new usuario
 
router.post('/register', (req, res, next)=> {
  const {name,email,username}=req.body;
  const newUser = new UserModel({
    // companyName:name,
    name,
    email,
    username
   
  })
  newUser.save();
  res.status(200).json(newUser);
});

// Consult a usuario
 
router.get('/consult', (req, res, next)=> {
  const id = req.query.id;
  UserModel.findById({_id:id},(err,user)=>{
    if(err){
      res.status(404).json({"error":err})
      return
    }else{
      res.status(200).json(user);
      return
    }
  })
 
});

// Generate a token

router.post('/gtoken', function (req, res, next) {
  const { username} = req.body;
  UserModel.findOne({ username}, (err, user) => {
    if (user) {
      jwt.sign({ user },'secretKey', (err, token) => {
        if (token) {
          res.status(200).json({ "token": token });
          return
        } else {
          res.status(404).json(err);
          return
        }
      })
    } else {
      res.status(404).json(err);
      return
    }
  })
});
















/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
