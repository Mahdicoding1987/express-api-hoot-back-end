const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    hashedPassword: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.set('toJSON', {
  transform: (document, returnedObj) => {
    delete returnedObj.hashedPassword;
  },
});

module.exports = mongoose.model('User', userSchema);