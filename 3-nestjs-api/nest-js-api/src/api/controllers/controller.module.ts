import { Module } from '@nestjs/common';
import { UserController } from './user-controller/user.controller';
import { ServiceModule } from '../services/service.module';
import { ChatController } from './chat-controller/chat.controller';

@Module({
  imports: [ServiceModule],
  controllers: [UserController, ChatController],
})
export class ControllerModule {}
