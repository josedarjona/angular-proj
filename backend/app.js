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
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH, PUT, OPTIONS")
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
  post.save().then(createdPost =>{
      res.status(201).json({
      message: "post added succesful",
      postId: createdPost._id
      });
  });


});


app.put("/api/posts/:id", (req, res, next) => {

  const post = new Post ({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content,

  });

  Post.updateOne({_id: req.params.id}, post).then(result => {

    console.log(result);
    res.status(200).json({ message: "Update Successful!"});


  })



})



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

app.get("/api/posts/:id", (req, res, next) => {
  Post.findById(req.params.id).then(post => {

    if (post) {

      res.status(200).json(post);

    } else {

      res.status(404).json({message: "Post Not Found"});

    }


  })
})


app.delete("/api/posts/:id", (req, res, next) => {

  // console.log(req.params.id);
  Post.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
  })
  res.status(200).json({ message: "post deleted!" });

});


module.exports = app;

