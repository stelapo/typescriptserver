import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, lowercase: true, trim: true },
    email: { type: String, unique: true, lowercase: true, trim: true },
    password: String,
    lastName: String,
    firstName: String,
    role: String,
    department: String,
}, {
        timestamps: true
    });

userSchema.set('toJSON', {
    transform: function (doc: any, ret: any, options: any) {
        delete ret.password;
        return ret;
    }
});

const UserModel = mongoose.model('UserModel', userSchema);
export default UserModel;