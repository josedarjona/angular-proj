const express = require('express')
const bodyParser = require('body-parser')

const app = express();

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
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "post added succesful"
  });

});

app.get('/api/posts', (req, res, next) => {
  const posts = [
    {
     id: 'aawfaefa23e33',
     title: 'first server side post',
     content: 'this is coming from the server'

    },
    {
      id: 'rgsrgx234',
      title: 'second server side post',
      content: 'this is coming from the server'

     },
  ];

  res.status(200).json({
    message: 'posts fetched succesfully',
    posts: posts,
  });

});


module.exports = app;

