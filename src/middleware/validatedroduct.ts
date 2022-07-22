import { validate, validateOrReject } from "class-validator";
import { Request, Response, NextFunction } from "express";
import { validateProduct } from "../schema/product.shema";
const validation =

  async (req: Request, res: Response, next: NextFunction) => {
    let prod = new validateProduct();
    prod.name = req.body.name;
    prod.desc = req.body.desc;
  

    validate(prod).then(errors => {

      if (errors.length > 0) {
        console.log('validation failed. errors: ', errors);
        res.json('validation failed. errors: ' + errors);
      } else {
        console.log('validation succeed');
      }
    });

    validateOrReject(prod).catch(errors => {
      console.log('Promise rejected (validation failed). Errors: ', errors);
    });
    next();
  };
export default validation;





