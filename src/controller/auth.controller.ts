import { Request, Response } from "express";
import {
  signAccessToken
} from "../service/auth.service";
import {findUserByEmail} from "../service/user.service";


// export async function createSessionHandler(
//   req: Request,
//   res: Response
// ) {
//   const message = "Invalid email or password";
//   const { email, password } = req.body;

//   const user = await findUserByEmail(email);

//   if (!user) {
//     return res.send(message);
//   }

//   const isValid = await user.validatePassword(password);

//   if (isValid) {
//     return res.send(message);
//   }

//   // sign a access token
//   const accessToken = signAccessToken(user);

//   // send the tokens
//   return res.send({
//     accessToken, user
   
//   });
// }

// export async function oneUser(
//   req: Request,
//   res: Response
// ) {
//   const message = "Invalid Id";
//   const { id} = req.params;

//   const user = await findUserById(id);
 
//   if (!user) {
//     return res.send(message);
//   }

//   return res.send({
//    user
//   });
// }
// export async function allUsers(
//   req: Request,
//   res: Response
// ) {


//   const users = await findAllUser();
 
//   if (!users) {
//     return res.send('error');
//   }

//   return res.send({
//    users
//   });
// }

class AuthController {
  async createSessionHandler(
    req: Request,
    res: Response
  ) {
    const message = "Invalid email or password";
    const { email, password } = req.body;
  
    const user = await findUserByEmail(email);
  
    if (!user) {
      return res.send(message);
    }
  
    const isValid = await user.validatePassword(password);
  
    if (isValid) {
      return res.send(message);
    }
  
    // sign a access token
    const accessToken = signAccessToken(user);
  
    // send the tokens
    return res.send({
      accessToken, user
     
    });
  }
}
export default new AuthController();

