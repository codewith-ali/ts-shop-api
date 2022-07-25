import 'reflect-metadata';
require("dotenv").config();
import express from "express";
import config from "config";
import connectToDb from "./utils/connectToDb";
import log from "./utils/logger";

import { CommonRoutesConfig } from '../common/common.routes.config';
import { UsersRoutes } from './routes/users.routes.config';
import { AuthRoutes } from './routes/auth.routes';
import { ProductRoutes } from './routes/product.routes.config';


const app = express();
app.use(express.json());
const port = config.get("port");

const routes: Array<CommonRoutesConfig> = [];
routes.push(new UsersRoutes(app));
routes.push(new AuthRoutes(app));
routes.push(new ProductRoutes(app));

app.listen(port, () => {
  log.info(`App started at http://localhost:${port}`);

  connectToDb();
});
