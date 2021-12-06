import { ProductModel } from './product.model';
import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductsService {
  private products: ProductModel[] = [];

  addProduct(title: string, desc: string, price: number) {

    const prodId = new Date().toString();
    const newProduct = new ProductModel(prodId, title, desc, price);
    this.products.push(newProduct);

    return prodId;
  };

  getAllProducts() {
    //pulling out all elements of arr and add them as new element into this array
    return [...this.products];
  }
}