import { IsString, MinLength, MaxLength } from "class-validator";
import { Product } from "../model/product.model";

export class validateProduct implements Pick<Product, 'name' | 'desc'> {
  @IsString()
  @MinLength(5)
  @MaxLength(50)
  name: string;

  @IsString()
  @MinLength(5)
  @MaxLength(50)
  desc: string;
}
