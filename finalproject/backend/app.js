// const express = require('express');
import express from 'express';
import mongoose from 'mongoose';

const app = express();

import bodyParser from 'body-parser';

import { Post } from './Models/post.js';

// const app = require('../backend/app');

// const bodyParser = require('body-parser');
// const port = 3000;

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
    "Origin, X-Resquested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.get('/', (req, res, next) => {
  //res.send('Hello World!')
  console.log('Middleware')
  next()
})

app.get('/', (req, res, next) => {
  res.send('Hello from express')
})

app.post('/api/posts', (req,res,next)=>{
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  console.log(post);
  post.save();
  res.status(201).json({
    message: 'Post added successfully'
  });
});

app.use('/api/posts', (req,res,next)=>{
  Post.find()
    .then(documents => {
      res.status(200).json({
        message: 'Posts fetched successfully',
        posts: documents
    });
  });
});

// app.use('/api/posts', (req,res,next)=>{
//   res.status(200).json({
//     //message:"This is fetched data",
//     TEST: test
//   });
// })

// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });

// module.exports = app;
export { app };

// const mongoose = require('mongoose')

// const PostModel = require('./Models/post')

// mongoose.connect("mongodb+srv://Group15:<IT4830>@finalcluster.lolpfr7.mongodb.net/?retryWrites=true&w=majority")
// .then(()=>{
//   console.log('Connected to database')
// })
// .catch(()=>{
//   console.log('connection error')
// })


// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:false}))

// app.post("/api/posts",(req,res,next)=>{
//   const post = new PostModel({
//     title: req.body.title,
//     content: req.body.content
//   })
//   post.save()
//   console.log(post)
//   res.status(201).json({
//     message:'Post added successful'
//   });
// })

// app.get('/api/posts',(req,res,next)=>{
//   PostModel.find().then(documents =>{
//     req.status(200).json({
//       message:"This is fetched data",
//       posts: documents
//     });
//   });
// });

// const userSchema = new mongoose.Schema({
//   email: String,
//   password: String,
// });

// const User = mongoose.model('User', userSchema);

