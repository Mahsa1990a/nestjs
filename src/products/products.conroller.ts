import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsCtroller {
  
  constructor(private productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string, 
    @Body('description') prodDesc: string, 
    @Body('price') prodPrice: number
    ) {
    const generatedId = this.productsService.addProduct(prodTitle, prodDesc, prodPrice);
    return { id: generatedId };
  };

  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  };

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    this.productsService.getProduct(prodId);
  };

  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string, 
    @Body('description') prodDesc: string, 
    @Body('price') prodPrice: number
    ) {
      this.productsService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);

      return null;
  };

  @Delete(':id')
  deleteProduct(@Param('id') prodId: string) {
    this.productsService.deleteProduct(prodId);
    return null;
  }

}