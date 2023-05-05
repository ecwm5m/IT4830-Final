import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { Post } from './Models/post.js';

const app = express();

mongoose.connect("mongodb+srv://Group15:IT4830@finalcluster.lolpfr7.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
  console.log('Connected to database')
})
.catch(()=>{
  console.log('connection error')
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.get('/', (req, res, next) => {
  res.send('Hello from express')
  console.log('Hello');
})

app.post('/api/posts', (req,res,next)=>{
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  console.log(post);
  post.save().then(result => {
    res.status(201).json({
      message: 'Post added successfully',
      postId: result._id
    });
  });
});

app.delete("/api/posts/:id", (req,res,next)=>{
  console.log("Delete request received for post ID: ", req.params.id);
  Post.deleteOne({_id: req.params.id}).then(result => {
    console.log(result);
    console.log("deleteOne called");
    if(result.deletedCount === 1) {
      res.status(200).json({ message: "Post deleted"});
    } else {
      res.status(404).json({ message: "Post not found"});
    }
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: "An error occurred while deleting the post"});
  });
});

app.use('/api/posts', (req,res,next)=>{
  console.log('Posts Fetched');
  Post.find()
    .then(documents => {
      res.status(200).json({
        message: 'Posts fetched successfully',
        posts: documents
    });
  });
});

export { app };
