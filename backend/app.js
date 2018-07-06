const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require("mongoose")

// const Post = require('./models/post')
const postsRoutes = require('./routes/posts')

const app = express();

mongoose.connect("mongodb+srv://jose:nap0mFwCrPAimXhj@cluster0-uvowy.mongodb.net/node-angular?retryWrites=true")
  .then(() => {
      console.log('Connected to DB');

  })
  .catch(() => {
      console.log('Connection Failed');
  })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));



app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH, PUT, OPTIONS")
  next();

})


// app.use((req, res, next) => {
//   console.log('First middleware')
//   next();
// });


app.use("/api/posts", postsRoutes);




module.exports = app;

