import mongoose from'mongoose';

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  topic: String,
  body:String,
  type: String,
  level: Number,
  value: Number,
});

export default mongoose.model('Question', QuestionSchema);