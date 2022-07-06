import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },

  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },

  pasword: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 6,
   
  },

  lastName: {
    type: String,
    minlength: 3,
    maxlength: 20,
    trim: true,
    default: 'lastName'
  },

  location: {
    type: String,
    required: [true, "Please provide a name"],
    maxlength: 20,
    trim: true,
  },
  
});

export default mongoose.model('User', UserSchema)
