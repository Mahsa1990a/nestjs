import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-type', 'text/html') //you can add it here
  // getHello(): string {
  getHello(): { name: string } {
    // return this.appService.getHello();
    return {name: "Mahsa"};
  }
}
