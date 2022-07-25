import productController from "../controller/product.controller";
import express from "express";

import extractJWT from "../utils/extractJWT"
import validation from "../middleware/validatedroduct";

import { CommonRoutesConfig } from '../../common/common.routes.config';
export class ProductRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'ProductRoutes');
    }

    configureRoutes() {
        this.app
            .route(`/api/product`)
            .get( extractJWT, productController.AllProductHandler)
            .post(
                 validation,
                 productController.createproductHandler
            )
        this.app
            .route(`/api/product/:id`)
            .get(  extractJWT,
              productController.productByIdHandler)
        return this.app;
    }
}