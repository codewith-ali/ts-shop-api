import { validate, validateOrReject } from "class-validator";
import { Request, Response, NextFunction } from "express";
import { validateUser } from "../schema/user.schema";
const validation =

  async (req: Request, res: Response, next: NextFunction) => {
    let user = new validateUser();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password;

    validate(user).then(errors => {

      if (errors.length > 0) {
        console.log('validation failed. errors: ', errors);
        res.json('validation failed. errors: ' + errors);
      } else {
        console.log('validation succeed');
      }
    });

    validateOrReject(user).catch(errors => {
      console.log('Promise rejected (validation failed). Errors: ', errors);
    });
    next();
  };
export default validation;





