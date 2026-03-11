import {Router} from 'express'; 
import { getUsers, getUser, getCurrentUser, createUser, updateUser, deleteUser } from '../controllers/user.controller.js';
import authorize from '../middlewares/auth.middleware.js';

const userRouter = Router();

userRouter.get('/', authorize, getUsers );

userRouter.get('/me', authorize, getCurrentUser );

userRouter.get('/:id', authorize, getUser );

userRouter.post('/', authorize, createUser );

userRouter.put('/:id', authorize, updateUser );

userRouter.delete('/:id', authorize, deleteUser );

export default userRouter;