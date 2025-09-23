import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Subscription name is required'],
        trim: true,
        minLength: [2, 'Name must be at least 2 characters long'],
        maxLength: [100, 'Name must be at most 50 characters long']
    },

    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be greater than or equal to 0'],

    },
    currency:{
        type: String,
        enum: ['USD', 'EUR', 'GBP', 'INR', 'JPY', 'CNY'],
        default: 'USD'
    },

    frequency: {
        type: String,
        enum: ['daily', 'weekly', 'monthly', 'yearly']
    },

    category: {
        type: String,
        enum: ['entertainment', 'education', 'productivity', 'health', 'other'],
        required: [true, 'Category is required']
    },

    paymentMethod: {
        type: String,
        required: [true, 'Payment method is required'],
        trim: true,

    },
    
    status: {
        type: String,
        enum: ['active', 'canceled', 'expired'],
        default: 'active'
    },

    startDate: {
        type: Date,
        required: [true, 'Start date is required'],
        validate:{
            validator: (value) => value <= new Date(),
            message: 'Start date must be in the past',
        }   
    },

    renewalDate: {
        type: Date,
        required: [true, 'Renewal date is required'],
        validate:{
            validator: 
            function(value){
                return value > this.startDate;
            },
            message: 'Renewal date must be after start date',
        }   
    },

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
    }

}, {timestamps: true});


//this function auto-calculates renewalDate based on startDate and frequency before saving if renewalDate is not provided
subscriptionSchema.pre('save', function(next){
    if(!this.renewalDate){
        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365
        };

        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.startDate.getDate() + renewalPeriods[this.frequency]);
    }

    //auto-update status to expired if renewalDate is in the past
    if(this.renewalDate < new Date()){
        this.status = 'expired';
    }
    next();
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;