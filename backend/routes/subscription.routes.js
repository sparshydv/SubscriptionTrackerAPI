import { Router } from 'express';
import authorize from '../middlewares/auth.middleware.js';
import {
    createSubscription,
    getUserSubscriptions,
    getSubscriptions,
    getSubscriptionById,
    updateSubscription,
    deleteSubscription,
    cancelSubscription,
    getUpcomingRenewals
} from '../controllers/subscription.controller.js';

//these all are crud functions for subscriptions and we do it for all like users, auth etc

const subscriptionRouter = Router();

subscriptionRouter.get('/', authorize, getSubscriptions );

subscriptionRouter.get('/upcoming-renewals', authorize, getUpcomingRenewals );

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions );

subscriptionRouter.get('/:id', authorize, getSubscriptionById );

subscriptionRouter.post('/', authorize, createSubscription );

subscriptionRouter.put('/:id', authorize, updateSubscription );

subscriptionRouter.delete('/:id', authorize, deleteSubscription );

subscriptionRouter.put('/:id/cancel', authorize, cancelSubscription );

export default subscriptionRouter;