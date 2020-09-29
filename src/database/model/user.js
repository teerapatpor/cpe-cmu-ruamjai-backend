const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  position: String,
  code: String,
  petitions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "petitions",
      require: true,
    },
  ],
});

module.exports = mongoose.model("users", userSchema);
