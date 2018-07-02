const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require("mongoose")

const Post = require('./models/post')

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
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH, OPTIONS")
  next();

})


// app.use((req, res, next) => {
//   console.log('First middleware')
//   next();
// });


app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  // console.log(post);
  post.save();
  res.status(201).json({
    message: "post added succesful"
  });

});

app.get('/api/posts', (req, res, next) => {
  //dummy data for testing
  // const posts = [
  //   {
  //    id: 'aawfaefa23e33',
  //    title: 'first server side post',
  //    content: 'this is coming from the server'

  //   },
  //   {
  //     id: 'rgsrgx234',
  //     title: 'second server side post',
  //     content: 'this is coming from the server'

  //    },
  // ];

  Post.find()
  .then(documents => {
    console.log(documents);
    res.status(200).json({
      message: 'posts fetched succesfully',
      posts: documents,
    });
  });

});


module.exports = app;

