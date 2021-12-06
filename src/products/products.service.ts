import { ProductModel } from './product.model';
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class ProductsService {
  private products: ProductModel[] = [];

  addProduct(title: string, desc: string, price: number) {

    // const prodId = new Date().toString();  OR:
    const prodId = Math.random().toString();
    const newProduct = new ProductModel(prodId, title, desc, price);
    this.products.push(newProduct);

    return prodId;
  };

  getAllProducts() {
    //pulling out all elements of arr and add them as new element into this array
    return [...this.products];
  };

  getProduct(id: string) {
    const aProduct = this.products.find(product => product.id === id);
    console.log("Product ====>", aProduct);
    if (!aProduct) {
      // throw new Error() ORRR:
      throw new NotFoundException('Could not find products');
    }
    return {...aProduct};
  };
}