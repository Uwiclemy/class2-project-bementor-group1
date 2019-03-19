const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true
  }
);

mentorSchema.index({
  firstName: "text",
  lastName: "text",
  shortBio: "text",
  interests: "text"
});

module.exports = mongoose.model("Mentor", mentorSchema);
