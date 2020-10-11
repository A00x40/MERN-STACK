import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  username: string; 
}

const userSchema:Schema = new Schema({
    username:{
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