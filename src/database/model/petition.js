const mongoose = require("mongoose");

const detailData = {
  topic: String,
  description: String,
};

const petitionSchema = mongoose.Schema({
  type: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    require: true,
  },
  detail: detailData,
  sub_detail: [detailData],
  status: String,
  voteNum: Number,
  approved: Boolean,
  canVote: Boolean,
});

module.exports = mongoose.model("petitions", petitionSchema);
