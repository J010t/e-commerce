import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type:String,
        required: true,
    },
    password: {
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true,
    },
})

const User = mongoose.model("user", UserSchema);

export default User
