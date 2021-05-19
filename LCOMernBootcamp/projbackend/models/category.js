import mongoose from "mongoose";
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true.valueOf,
      maxlength: 32,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
