import {
    getModelForClass,
    modelOptions,
    prop,
    Severity
  } from "@typegoose/typegoose";
  
  @modelOptions({
    schemaOptions: {
      timestamps: true,
    },
    options: {
      allowMixed: Severity.ALLOW,
    },
  })
  export class Product {
 
    @prop({ required: true })
    name: string;
  
    @prop({ required: true })
    desc: string;
  
  }
  
  const productModel = getModelForClass(Product);
  
  export default productModel;
  