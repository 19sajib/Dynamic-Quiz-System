import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    enrolledQuiz: [],
    takenQuiz: [],
    totalSpend: {
        type: Number,
        default: 0
    },
    totalRefund: {
        type: Number,
        default: 0
    }

}, 

{timestamps: true}

)

const UserModel = mongoose.model('Users', UserSchema)

export default UserModel;