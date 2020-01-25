const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const {User} = require('./user.js');
const {Exercise} = require('./exercise.js');

router.post('/create-user', async(req, res)=> {
  const check = await User.findOne({username: req.body.user});
  if (check) {
    res.send('User already exists!');
  }
  const user = await new User({username: req.body.user}).save();
  res.send({"user": user.username, "id": user._id});
});

router.post('/create-exercise', async(req, res)=> {
  const date = req.body.split('-');
  if (date[0].length !== 4) {
    res.send('plwase enter a correct date');
  }
  console.log(req.body);
  const exercisePromise = new Exercise(req.body).save();
  const userPromise = User.findOne({ _id: req.body.userId});
  const [exercise, user] = await Promise.all([exercisePromise, userPromise]);
  
  res.send({
    username: user.username,
    userId: exercise.userId,
    description: exercise.description,
    duration: exercise.duration,
    date: exercise.date
  });
});

module.exports = router;