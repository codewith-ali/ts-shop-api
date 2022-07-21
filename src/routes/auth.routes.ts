import express from "express";
import {
  oneUser,
  createSessionHandler,
  allUsers
  
} from "../controller/auth.controller";
import validateResource from "../middleware/validateResource";
import { createSessionSchema } from "../schema/auth.schema";

const router = express.Router();

router.post(
  "/api/sessions",
  validateResource(createSessionSchema),
  createSessionHandler
);

router.get(
  "/api/user/:id", oneUser
);
router.get(
  "/api/user/", allUsers
);



export default router;
