import { Module } from '@nestjs/common';
import { UserService } from './user-service/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../domain/models/user.model';
import { ChatService } from './chat-service/chat.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatSchema } from '../domain/schemas/chat.schema';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    MongooseModule.forFeature([{ name: 'Chat', schema: ChatSchema }]),
  ],
  providers: [UserService, ChatService],
  exports: [UserService, ChatService],
})
export class ServiceModule {}
