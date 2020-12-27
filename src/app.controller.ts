import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/hello')
  sayHello(): string {
    return 'sayHello';
  }

  @Post('/helloV2')
  sayHelloV2(): string {
    return 'sayHello';
  }
}
