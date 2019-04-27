import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();
// Load User Model
import '../models/User';
const User = mongoose.model('user');

router.post('/add', (req, res) => {
  let errors = [];

  if(!req.body.firstName){
    errors.push({text:'Please add a firstName'});
  }
  if(!req.body.lastName){
    errors.push({text:'Please add a lastName'});
  }

  if(errors.length > 0){
    res.send('Error');
  } else {
    const newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password
    };
    new User(newUser)
      .save()
      .then(user => {
        res.send(`${user.firstName} ${user.lastName} user created`);
      });
  }
});


module.exports = router;
