import mongoose from "mongoose";
import validator from "validator";

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
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid emal'
    },
    unique: true,
  },

  password: {
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
    maxlength: 20,
    trim: true,
    default: 'Seattle, WA'
  },
  
});

UserSchema.pre('save', function() {
  console.log(this.password)
})

export default mongoose.model('User', UserSchema)
