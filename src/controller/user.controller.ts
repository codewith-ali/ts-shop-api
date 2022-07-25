import { Request, Response } from "express";

import {
  createUser,
} from "../service/user.service";
import { findAllUser, findUserById } from "../service/user.service";

// export async function createUserHandler(
//   req: Request,
//   res: Response
// ) {
//   const body = req.body;

//   try {
//     const user = await createUser(body);


//     return res.send("User successfully created"+ user);
//   } catch (e: any) {
//     if (e.code === 11000) {
//       return res.status(409).send("Account already exists");
//     }

//     return res.status(500).send(e);
//   }
// }

class UserController{
  async createUserHandler(
    req: Request,
    res: Response
  ) {
    const body = req.body;
  
    try {
      const user = await createUser(body);
  
  
      return res.send("User successfully created"+ user);
    } catch (e: any) {
      if (e.code === 11000) {
        return res.status(409).send("Account already exists");
      }
  
      return res.status(500).send(e);
    }
  }
  async oneUser(
    req: Request,
    res: Response
  ) {
    const message = "Invalid Id";
    const { id} = req.params;
  
    const user = await findUserById(id);
   
    if (!user) {
      return res.send(message);
    }
  
    return res.send({
     user
    });
  }
  async allUsers(
    req: Request,
    res: Response
  ) {
  
  
    const users = await findAllUser();
   
    if (!users) {
      return res.send('error');
    }
  
    return res.send({
     users
    });
  }
}

export default new UserController();
