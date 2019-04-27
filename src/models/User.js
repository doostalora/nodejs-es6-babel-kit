import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//Create User Schema
const UserSchema = new Schema({
  firstName:{
    type: String,
    required: true
  },
  lastName:{
    type: String,
    required: true
  },
  enabled:{
    type: Boolean,
    default: true
  },
  password:{
    type: String,
    required: true
  }
});

mongoose.model('user', UserSchema);

