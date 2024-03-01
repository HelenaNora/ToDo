const mongoose = require("mongoose");
const { Schema } = mongoose;

const toDoSchema = new Schema(
  {
    task: {
      type: STRING,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", toDoSchema);
