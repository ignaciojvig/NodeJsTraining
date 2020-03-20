import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IChat } from 'src/api/domain/domain-interfaces/chat.interface';
import { Model } from 'mongoose';
import { ChatCreatorViewModel } from 'src/api/domain/view-models/chat-view-model/chat.creator.viewmodel';
import { UserService } from '../user-service/user.service';
import { RxWebsocketGateway } from 'src/api/gateway/rx-websocket.gateway';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel('Chat')
    private readonly chatRepository: Model<IChat>,
    private readonly userService: UserService,
    private readonly rxWebsocketGateway: RxWebsocketGateway,
  ) {}

  async getMessages(pageSize: number, pageIndex: number): Promise<IChat[]> {
    const messageList = (await this.chatRepository
      .find()
      .sort({ timestamp: -1 })
      .skip(pageSize * pageIndex)
      .limit(pageSize)
      .lean()) as IChat[];

    return messageList.reverse();
  }

  async addMessage(newMessage: ChatCreatorViewModel): Promise<IChat> {
    const user = await this.userService.getById(newMessage.userId.toString());

    if (!user) {
      throw new BadRequestException(
        'The user with the given id does not exist',
      );
    }

    const createdMessage = await this.chatRepository.create(newMessage);
    const savedMessage = await createdMessage.save();

    this.rxWebsocketGateway.broadcastNewMessage();

    return savedMessage;
  }
}
