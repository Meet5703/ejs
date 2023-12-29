const mongoose = require("mongoose");

const filmProductionSchema = new mongoose.Schema({
  name: { type: String },
  fatherName: { type: String },
  motherName: { type: String },
  address: { type: String },
  actingRole: {
    type: String,
    enum: [
      "Lead Actor",
      "Lead Actress",
      "Side Actor",
      "Side Actress",
      "Comedian",
      "Dancer",
      "Stunt man",
      "Music Composer",
      "Director",
      "Villain",
    ],
    default: "Lead Actor", // Set a default value if needed
  },
  mobileNumber: { type: Number },
  whatsappNumber: { type: Number },
  video: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model("FilmProduction", filmProductionSchema);
