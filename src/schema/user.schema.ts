import { IsString, MinLength, MaxLength, IsEmail } from "class-validator";
import { User } from "../model/user.model";

export class validateUser implements Pick<User, 'firstName' | 'lastName' | 'email' | 'password'> {
  @IsString()
  @MinLength(5)
  @MaxLength(50)
  firstName: string;

  @IsString()
  @MinLength(5)
  @MaxLength(50)
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  password:string;
}





