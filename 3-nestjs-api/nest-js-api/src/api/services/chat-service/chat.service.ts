import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IChat } from 'src/api/domain/domain-interfaces/chat.interface';
import { Model } from 'mongoose';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel('Chat')
    private readonly chatRepository: Model<IChat>,
  ) {}

  async getMessages(pageSize: number, pageIndex: number): Promise<IChat[]> {
    return await this.chatRepository
      .find()
      .sort({ timestamp: -1 })
      .skip(pageSize * pageIndex)
      .limit(pageSize)
      .lean();
  }

  async addMessage(newMessage: IChat): Promise<IChat> {
    const createdMessage = await this.chatRepository.create(newMessage);
    return await createdMessage.save();
  }
}
