var express = require('express');
var router = express.Router();
var userModel = require('../schema/schema');
var jwt = require('jsonwebtoken');


/* consult a user id */
router.get('/consult', function (req, res, next) {
  const id = req.query.id;
  userModel.findById({ _id: id }, (err, val) => {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(201).json(val);
    }
  })
});

/*  create a new User */
router.post('/login', function (req, res, next) {
  const { email, password } = req.body;
  userModel.findOne({ email, password }, (err, user) => {
    if (err) {
      res.status(404).json(err);
    } else {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ "error": " User not found" });
      }
    } err
  })
})




/* create a new User */
router.post('/create', function (req, res, next) {
  const data = req.body;
  console.log(data);
  const newUser = new userModel({
    username: data.username,   // username es por schema, usr body value.
    password: data.password,
    email: data.email,
  })
  newUser.save();
  res.status(201).json({ newUser, 'Message': 'New user Created' })
});






/* update a User */
router.patch('/update/:id', function (req, res, next) {
  const { username, password } = req.body;
  const id = req.params.id;
  userModel.findByIdAndUpdate({ _id: id }, { username: username, password: password }, { new: true })
    .exec((err, val) => {
      if (err) {
        res.status(404).json(err);
      } else {
        res.status(201).json(val);
      }
    })
});




/* delete a User */
router.delete('/delete/:id', function (req, res, next) {
  const id = req.params.id;
  userModel.findByIdAndDelete({ _id: id })
    .exec((err, val) => {
      if (err) {
        res.status(404).json(err);
        return
      } else {
        res.status(201).json(val);
        return
      }
    })
});

//localstorage -> Bearer <token>

const secretKey = "algun secreto"

/*  example: 1- create a new token */
router.post('/logintoken', function (req, res, next) {
  const { email, password } = req.body;
  userModel.findOne({ email, password }, (err, user) => {
    if (user) {
      jwt.sign({ user }, secretKey, (err, token) => {
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

/*  example: 2- usuing a token  */
router.post('/loginv', verifytoken, (req, res, next) => {
  jwt.verify(req.token, secretKey, (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({ message: "Succesfully logged",data });
    }
  })
});



function verifytoken(req, res, next) {
  const bearerHeader = req.header['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const barearSet = bearerHeader.split(' ');
    const barearPosition = barearSet[1];
    req.token = barearPosition;
    next();
  } else {
    res.sendStatus(403);
  }
}

module.exports = router;



// difarence between line 93 and 114 =>