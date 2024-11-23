import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Please add a question"],
    },
    answer: {
      type: String,
      required: [true, "Please add an answer"],
    },
  },
  { timestamps: true }
);
export const Question = mongoose.model("Question", questionSchema);
