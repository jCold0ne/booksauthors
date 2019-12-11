const mongoose = require('mongoose') // Require in mongoose
const Schema = mongoose.Schema // Pull the Schema off of mongoose

// Creating the Author schema from Schema
// Notice the required, default and enum options

const AuthorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    default: ''
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'non binary'],
    default: 'non binary'
  }
}); 

module.exports = AuthorSchema // Dont forget to export the Author Schema
