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
    const product = this.findProduct(id)[0];
    return {...product};
  };

  updateProduct(
    productId: string,
    title: string,
    desc: string,
    price: number
  ) {
    // const product = this.findProduct(productId)[0];
    // const index = this.findProduct(productId)[1];
    //OR Array destructuring:
    const [product, index] =  this.findProduct(productId);
    const updatedProduct = {...product};
    if (title) {
      updatedProduct.title = title;
    }
    if (desc) {
      updatedProduct.desc = desc;
    }
    if (price) {
      updatedProduct.price = price;
    }
    this.products[index] = updatedProduct;

  }

  deleteProduct(id: string) {
    // const product = this.findProduct(productId)[0]; 
    // const index = this.findProduct(productId)[1];  OR:
    const [product, index] = this.findProduct(id);
    this.products.splice(index, 1); // splice(index, how many to remove)
  }

  // For getProduct and updateProduct to not have duplication:
  private findProduct(id: string): [ProductModel, number] {
    const productIndex = this.products.findIndex(product => product.id === id);
    const product = this.products[productIndex];
    console.log("Product index ====>", productIndex);
    console.log("Product ====>", product);
    if (!product) {
      // throw new Error() ORRR:
      throw new NotFoundException('Could not find products');
    }
    return [product, productIndex];
  }
}