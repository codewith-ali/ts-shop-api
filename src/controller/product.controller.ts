import { Request, Response } from "express";

import {
  createProduct,
  findAllProduct,
  findProductById
 
} from "../service/product.services";

export async function createproductHandler(
  req: Request<{}, {}>,
  res: Response
) {
  const body = req.body;

  try {
    const user = await createProduct(body);


    return res.send("Product successfully created"+ user);
  } catch (e: any) {
    
    return res.status(500).send(e);
  }
}
export async function productByIdHandler(
    req: Request,
    res: Response
  ) {
    
    const message = "Invalid Id";
    const { id} = req.params;
  
    const prod = await findProductById(id);
   
    if (!prod) {
      return res.send(message);
    }
  
    return res.send({
     prod
    });
}  

export async function AllProductHandler(
  req: Request,
  res: Response
) {

  const message = 'something went wrong'
  
  const prod = await findAllProduct();
 
  if (!prod) {
    return res.send(message);
  }

  return res.send({
   prod
  });
}  



 