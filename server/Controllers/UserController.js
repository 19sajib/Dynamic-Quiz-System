import bcrypt from 'bcryptjs'

import UserModel from '../Models/User.js'


//update user

export const updateUser = async (req, res) => {
    const { password } = req.body;
    
    if(password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
    }
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id,{
            $set: req.body
        }, { new: true })

        res.status(200).json({...user._doc, password: null})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// delete user

export const  deleteUser = async (req, res) => {

    try {
        const user = await UserModel.findByIdAndDelete(req.params.id)
        res.status(200).json("User deleted successfully...")
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}