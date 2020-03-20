import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { ChatService } from 'src/api/services/chat-service/chat.service';
import { IChat } from 'src/api/domain/domain-interfaces/chat.interface';
import { QueryParamToNumberPipe } from 'src/api/pipes/query-param-to-number.pipe';
import { ChatCreatorViewModel } from 'src/api/domain/view-models/chat-view-model/chat.creator.viewmodel';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get()
  async getMessages(
    @Query('pageSize', new QueryParamToNumberPipe()) pageSize: number,
    @Query('pageIndex', new QueryParamToNumberPipe()) pageIndex: number,
  ): Promise<IChat[]> {
    return await this.chatService.getMessages(pageSize, pageIndex);
  }

  @Post()
  async addMessage(@Body() newMessage: IChat): Promise<IChat> {
    return await this.chatService.addMessage(newMessage);
  }
}
