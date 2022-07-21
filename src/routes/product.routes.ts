
import {
  createproductHandler,
  productByIdHandler
 
} from "../controller/product.controller";
import express from "express";

import extractJWT from "../utils/extractJWT"



const router = express.Router();

router.post(
  "/api/product",
  createproductHandler
);
router.get(
  "/api/productbyid/:id",
  extractJWT,
  productByIdHandler
);

export default router;
