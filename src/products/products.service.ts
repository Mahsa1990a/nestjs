import { ProductModel } from './product.model';
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductsService {
  products: ProductModel[] = [];

  addProduct(title: string, desc: string, price: number) {

    const prodId = new Date().toString();
    const newProduct = new ProductModel(prodId, title, desc, price);
    this.products.push(newProduct);

    return prodId;
  }
}