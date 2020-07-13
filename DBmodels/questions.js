import mongoose from'mongoose';

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  topic: String,
  body:String,
  answer: String,
});

export default mongoose.model('Question', QuestionSchema);


