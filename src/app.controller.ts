import { Get, Controller } from '@nestjs/common';

@Controller('v1')
export class AppController {
  @Get()
  root(): string {
    return 'Hello World!';
  }
}
