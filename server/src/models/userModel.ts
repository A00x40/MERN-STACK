import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string; 
}

const userSchema:Schema = new Schema({
    name:{
      type:String,
      minlenght:5,
      unique:true,
      required:[true,"A User must have a name"],
    },
}, {
    timestamps: true,
});
  
const User = mongoose.model<IUser>("User",userSchema);
export default User;