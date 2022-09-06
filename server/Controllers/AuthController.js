import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import UserModel from '../Models/User.js'

export const registerUser = async (req, res) => {
    const { username, email, password, fullName } = req.body;

    if(!fullName || !username || !email || !password ) return res.status(401).json('Invalid Credentials');

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    req.body.password = hashedPassword

    const newUser = new UserModel(req.body)

    try {
        const user = await newUser.save()

        const token = jwt.sign({
            username: user.username, id: user._id,
        },process.env.JWT_SECRET_KEY,{expiresIn: '2h'})

        res.status(201).json({...user._doc, password: null, token})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const loginUser = async (req, res) => {
    const { username, password } = req.body;

    if(!username || !password) return res.status(401).json('Invalid Credentials')

    try {
        const user = await UserModel.findOne({username})
        
        if(!user) return res.status(401).json('Invalid Credentials')
        
        const validity = await bcrypt.compare(password, user.password)
        
        if(!validity) return res.status(401).json('Invalid Credentials')

        const token = jwt.sign({
            username: user.username, id: user._id,
        },process.env.JWT_SECRET_KEY,{expiresIn: '2h'})

        res.status(200).json({...user._doc, password: null, token})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}