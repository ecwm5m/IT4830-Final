const mongoose = require('mongoose')

postSchema = mongoose.Schema({
  title: {type:String, required: true }
  // content:{type:String, require: true}
})

module.exports = mongoose.model('Post', postSchema)
