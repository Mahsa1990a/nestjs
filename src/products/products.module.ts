import { Module } from '@nestjs/common';
import { ProductsCtroller } from "./products.conroller";
import { ProductsService } from "./products.service";

@Module({
  imports: [],
  controllers: [ProductsCtroller],
  providers: [ProductsService],
})
export class ProductsModule {

}