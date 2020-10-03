const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  role: String,
  code: String,
  petitions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "petitions",
    },
  ],
});

module.exports = mongoose.model("users", userSchema);
