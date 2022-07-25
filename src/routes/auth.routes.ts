import express from "express";
import AuthController from "../controller/auth.controller";
import validation from "../middleware/validateAuth";

import { CommonRoutesConfig } from '../../common/common.routes.config';
export class AuthRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'AuthRoutes');
    }
    configureRoutes() {
        this.app
            .route(`/api/session`)
            .post(
            validation,
            AuthController.createSessionHandler
            )
          
        return this.app;
    }
}


