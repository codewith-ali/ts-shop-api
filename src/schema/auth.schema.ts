// import { object, string, TypeOf } from "zod";

// export const createSessionSchema = object({
//   body: object({
//     email: string({
//       required_error: "Email is required",
//     }).email("Invalid email or password"),
//     password: string({
//       required_error: "Password is required",
//     }).min(6, "Invalid email or password"),
//   }),
// });

// export type CreateSessionInput = TypeOf<typeof createSessionSchema>["body"];


import { IsString, IsEmail, MaxLength, MinLength} from "class-validator";
import { User } from "../model/user.model";

export class validateAuth implements Pick<User, 'email' | 'password'> {
  
  @IsEmail()
  email: string;

  
  @IsString()
  @MinLength(5)
  @MaxLength(50)
  password:string;
}