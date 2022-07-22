import validation from "../middleware/validateregisteration";
import {
  createUserHandler
} from "../controller/user.controller";

import express from "express";
const router = express.Router();

router.post(
  "/api/users",
  validation,
  createUserHandler
);

export default router;
