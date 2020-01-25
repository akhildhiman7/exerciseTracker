const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const {ObjectID} = require('mongodb');
const {User} = require('./user.js');
const {Exercise} = require('./exercise.js');
mongoose.connect(process.env.MONGO_URI, {useMongoClient: true} )
app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

const routes = require('./index')
app.use('/', routes)
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
