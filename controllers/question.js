import { Question } from "../models/question.js";

export const createQuestion = async (req, res) => {
  try {
    const { question, answer } = req.body;
    if (!question || !answer) {
      return res.json({
        success: false,
        message: "Please add a question and an answer",
      });
    }
    const questionRes = await Question.create({
      question,
      answer,
    });
    await questionRes.save();
    res.json({
      success: true,
      question: questionRes,
      message: "Question created successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Something went wrong",
    });
  }
};
