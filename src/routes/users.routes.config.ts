import UserController from "../controller/user.controller";

import express from 'express';
import validation from '../middleware/validateregisteration';

import { CommonRoutesConfig } from '../../common/common.routes.config';
// import { allUsers, oneUser } from "../controller/auth.controller";
export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes() {
        this.app
            .route(`/api/user`)
            .post(
                 validation,
                 UserController.createUserHandler
            )
            .get(UserController.allUsers)
            this.app
            .route(`/api/user/:id`)
            .get(UserController.oneUser)
        return this.app;
    }
}
