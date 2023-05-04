const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

const mongoose = require('mongoose')

const PostModel = require('./Models/post')

mongoose.connect("mongodb+srv://Group15:<IT4830>@finalcluster.lolpfr7.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
  console.log('Connected to database')
})
.catch(()=>{
  console.log('connection error')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

// app.get('/', (req, res, next) => {
//   //res.send('Hello World!')
//   console.log('Middleware')
//   next()
// })

// app.get('/', (req, res, next) => {
//   res.send('Hello from express')
// })

// app.post("/api/posts", (req,res,next)=>{
//   const post = new PostModel({
//     title: req.boody.title,
//     content: req.body.content
//   })
//   post.save()
//   console.log(post)
//   req.status(201).json({
//     message: 'Post added successful'
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

// app.use('/api/posts', (req,res,next)=>{
//   const test = "test string"

//   res.status(200).json({
//     //message:"This is fetched data",
//     TEST: test
//   });
// })

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({
    email,
    password: hashedPassword,
  });
  await user.save();
  res.status(200).send('User created');
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).send('Invalid email or password');
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).send('Invalid email or password');
  }
  const token = jwt.sign({ userId: user._id }, 'my_secret_key');
  res.status(200).send({ token });
});

app.listen(3000, () => console.log('Server started on port 3000'));


module.exports = app;
