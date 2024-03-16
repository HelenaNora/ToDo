const mongoose = require("mongoose");
const { Schema } = mongoose;

const toDoSchema = new Schema(
  {
    todo: {
      type: String,
      minLength: 5,
      maxLength: 30,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", toDoSchema);
