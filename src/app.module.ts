import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UserModule } from './user/user.module.js';
import { UsersModule } from './users/users.module.js';
import { ServiceController } from './user/service/service.controller.js';

@Module({
  imports: [UserModule, UsersModule],
  controllers: [AppController, ServiceController],
  providers: [AppService],
})
export class AppModule {}
