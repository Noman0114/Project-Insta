import mongoose from "mongoose";
const passSchema = new mongoose.Schema({
  
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
   
  
})
const Pass = mongoose.models.pass || mongoose.model("pass", passSchema);
export default Pass;