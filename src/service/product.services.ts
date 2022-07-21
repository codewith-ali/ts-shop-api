import productModel, { Product } from "../model/product.model";


export function createProduct(input: Partial<Product>) {
  return productModel.create(input)
 
}

export function findProductById(id: string) {
  return productModel.findById(id);
}


export function findAllProduct() {
  return productModel.find();
}