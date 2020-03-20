import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  BadRequestException,
} from '@nestjs/common';
import { User } from 'src/api/domain/models/user.model';
import { UserService } from 'src/api/services/user-service/user.service';
import { UserCreatorViewModel } from 'src/api/domain/view-models/user-view-model/user.creator.viewmodel';
import { UserUpdaterViewModel } from 'src/api/domain/view-models/user-view-model/user.updater.viewmodel';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return await this.userService.getAllUsers();
  }

  @Get('/active')
  async getAllActiveUsers(): Promise<User[]> {
    return await this.userService.getAllActiveUsers();
  }

  @Post()
  async createUser(@Body() newUser: UserCreatorViewModel): Promise<User> {
    return await this.userService.createUser(newUser);
  }

  @Put()
  async updateUser(@Body() updatedUser: UserUpdaterViewModel): Promise<User> {
    return await this.userService.updateUser(updatedUser);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<string> {
    await this.userService.deleteUser(id);
    return 'User successfully deleted!';
  }
}
