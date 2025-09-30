import { workflowClient } from '../config/upstash.js';
import Subscription from '../models/subscription.model.js';
import { SERVER_URL } from '../config/env.js';
import dayjs from 'dayjs';

export const createSubscription = async (req, res,next) => {
    try{
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id,
        });

        const {workflowRunId} = await workflowClient.trigger( {
            url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
            body:{
                subscriptionId: subscription.id,
            },
            headers: {
                'content-type': 'application/json',
            },
            retries: 0,
        }  )

        res.status(201).json({success: true, data: {subscription, workflowRunId}});

    }
    catch(e){
        next(e);
    }
}

export const getUserSubscriptions = async (req, res,next) => {
    try{
        
        if(req.user.id !== req.params.id){
            const error = new Error('You are not the owner of this account');
            error.statusCode = 401;
            throw error;
        }

        const subscriptions = await Subscription.find({user: req.params.id});

        res.status(200).json({success: true, data: subscriptions});

    }
    catch(e){
        next(e);
    }
}

export const getSubscriptions = async (req, res, next) => {
    try{
        const subscriptions = await Subscription.find({ user: req.user._id });
        res.status(200).json({ success: true, data: subscriptions });
    }
    catch(e){
        next(e);
    }
}

export const getSubscriptionById = async (req, res, next) => {
    try{
        const subscription = await Subscription.findById(req.params.id).populate('user', 'name email');
        if(!subscription){
            const error = new Error('Subscription not found');
            error.statusCode = 404;
            throw error;
        }
        if(subscription.user && subscription.user._id && subscription.user._id.toString() !== req.user.id){
            const error = new Error('You are not authorized to view this subscription');
            error.statusCode = 403;
            throw error;
        }
        res.status(200).json({ success: true, data: subscription });
    }
    catch(e){
        next(e);
    }
}

export const updateSubscription = async (req, res, next) => {
    try{
        const existing = await Subscription.findById(req.params.id);
        if(!existing){
            const error = new Error('Subscription not found');
            error.statusCode = 404;
            throw error;
        }
        if(existing.user.toString() !== req.user.id){
            const error = new Error('You are not authorized to update this subscription');
            error.statusCode = 403;
            throw error;
        }

        const updates = { ...req.body };
        delete updates.user;

        const updated = await Subscription.findByIdAndUpdate(
            req.params.id,
            updates,
            { new: true, runValidators: true }
        );

        res.status(200).json({ success: true, data: updated });
    }
    catch(e){
        next(e);
    }
}

export const deleteSubscription = async (req, res, next) => {
    try{
        const existing = await Subscription.findById(req.params.id);
        if(!existing){
            const error = new Error('Subscription not found');
            error.statusCode = 404;
            throw error;
        }
        if(existing.user.toString() !== req.user.id){
            const error = new Error('You are not authorized to delete this subscription');
            error.statusCode = 403;
            throw error;
        }
        await Subscription.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, data: { id: req.params.id } });
    }
    catch(e){
        next(e);
    }
}

export const cancelSubscription = async (req, res, next) => {
    try{
        const existing = await Subscription.findById(req.params.id);
        if(!existing){
            const error = new Error('Subscription not found');
            error.statusCode = 404;
            throw error;
        }
        if(existing.user.toString() !== req.user.id){
            const error = new Error('You are not authorized to cancel this subscription');
            error.statusCode = 403;
            throw error;
        }
        existing.status = 'canceled';
        await existing.save();
        res.status(200).json({ success: true, data: existing });
    }
    catch(e){
        next(e);
    }
}

export const getUpcomingRenewals = async (req, res, next) => {
    try{
        const days = Number(req.query.days || 30);
        const now = dayjs();
        const until = now.add(days, 'day').toDate();

        const subscriptions = await Subscription.find({
            user: req.user._id,
            status: 'active',
            renewalDate: { $gte: now.toDate(), $lte: until }
        }).sort({ renewalDate: 1 });

        res.status(200).json({ success: true, data: subscriptions });
    }
    catch(e){
        next(e);
    }
}