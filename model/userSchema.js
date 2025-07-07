const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    name: {
        type: String,
        required:[ true,'user name is required'],
        minLength : [5, 'Name must be at least 5 characters long'],
        maxLength : [50, 'Name must be at most 50 characters long'],
        trim : true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        unique:[true, 'already registered'],
    },
    password: {
        type: String,
    },
    forgotPasswordToken: {
        type: String,
    },
    forPasswordExpiry: {
        type: Date,
    }
    },
    {
  timestamps: true  // ✅ CORRECT: This goes outside the field definitions
});

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;