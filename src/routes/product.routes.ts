import {
  AllProductHandler,
  createproductHandler,
  productByIdHandler
 
} from "../controller/product.controller";
import express from "express";

import extractJWT from "../utils/extractJWT"
import validation from "../middleware/validatedroduct";



const router = express.Router();

router.post(
  "/api/product",
    validation,
  createproductHandler
);
router.get(
  "/api/productbyid/:id",
  extractJWT,
  productByIdHandler
);
router.get(
  "/api/product/all",
  extractJWT,
  AllProductHandler
);

export default router;
