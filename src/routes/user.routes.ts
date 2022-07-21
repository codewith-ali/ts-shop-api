import validateResource from "../middleware/validateResource";
import {
  createUserSchema,

 
} from "../schema/user.schema";
import {
  createUserHandler
 
} from "../controller/user.controller";
import express from "express";

const router = express.Router();

router.post(
  "/api/users",
  validateResource(createUserSchema), 
  createUserHandler
 
  
);

export default router;
