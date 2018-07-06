const express = require('express');

const Post = require('../models/post')

const router = express.Router();

router.post("", (req, res, next) => {
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


router.put("/:id", (req, res, next) => {

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



router.get('', (req, res, next) => {
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

router.get("/:id", (req, res, next) => {
  Post.findById(req.params.id).then(post => {

    if (post) {

      res.status(200).json(post);

    } else {

      res.status(404).json({message: "Post Not Found"});

    }


  })
})


router.delete("/:id", (req, res, next) => {

  // console.log(req.params.id);
  Post.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
  })
  res.status(200).json({ message: "post deleted!" });

});

module.exports = router;