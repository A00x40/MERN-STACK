import mongoose, { Schema, Document } from 'mongoose';

export interface IExercise extends Document {
  username: string; 
  description: string;
  duration: Number;
  date: Date;
}
const exerciseSchema:Schema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
}, {
  timestamps: true,
});
  
const Exercise = mongoose.model<IExercise>("Exercise",exerciseSchema);
export default Exercise;