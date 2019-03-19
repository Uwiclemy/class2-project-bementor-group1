const mongoose = require("mongoose");

const MentorSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  img: {
    type: String
    //contentType: String
  },

  shortBio: {
    type: String,
    required: true
  },
  interests: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model("Mentor", MentorSchema);
