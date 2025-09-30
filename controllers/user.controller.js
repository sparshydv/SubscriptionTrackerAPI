import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const getUsers = async (req, res, next) => {
    try{
        const users = await User.find();

        //here is means in json format send this text to client
        res.status(200).json({
            success: true,
            message: 'Users fetched successfully',
            data: users,
        });

    }
    catch(error){
        next(error);
    }
}

export const getUser = async (req, res, next) => {
    try{
        const user = await User.findById(req.params.id).select('-password');
        if(!user){
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }


        //here is means in json format send this text to client
        res.status(200).json({
            success: true,
            message: 'Users fetched successfully',
            data: user,
        });

    }
    catch(error){
        next(error);
    }
}

export const createUser = async (req, res, next) => {
    try{
        const { name, email, password } = req.body;

        if(!name || !email || !password){
            const error = new Error('Name, email and password are required');
            error.statusCode = 400;
            throw error;
        }

        const existingUser = await User.findOne({ email });
        if(existingUser){
            const error = new Error('User already exists with this email');
            error.statusCode = 409;
            throw error;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({ name, email, password: hashedPassword });

        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: { ...user.toObject(), password: undefined },
        });
    }
    catch(error){
        next(error);
    }
}

export const updateUser = async (req, res, next) => {
    try{
        const { id } = req.params;
        const updates = { ...req.body };

        if(updates.password){
            const salt = await bcrypt.genSalt(10);
            updates.password = await bcrypt.hash(updates.password, salt);
        }

        if(updates.email){
            const existing = await User.findOne({ email: updates.email, _id: { $ne: id } });
            if(existing){
                const error = new Error('Email already in use by another user');
                error.statusCode = 409;
                throw error;
            }
        }

        const user = await User.findByIdAndUpdate(id, updates, { new: true, runValidators: true }).select('-password');
        if(!user){
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            data: user,
        });
    }
    catch(error){
        next(error);
    }
}

export const deleteUser = async (req, res, next) => {
    try{
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({
            success: true,
            message: 'User deleted successfully',
            data: { id: user._id },
        });
    }
    catch(error){
        next(error);
    }
}