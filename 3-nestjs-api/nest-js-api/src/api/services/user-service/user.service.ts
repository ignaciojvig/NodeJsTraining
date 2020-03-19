import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/api/domain/models/user.model';
import { Repository } from 'typeorm';
import { UserCreatorViewModel } from 'src/api/domain/view-models/user.creator.viewmodel';
import { UserUpdaterViewModel } from 'src/api/domain/view-models/user.updater.viewmodel';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getAllActiveUsers(): Promise<User[]> {
    return await this.userRepository.find({
      where: {
        isActive: true,
      },
    });
  }

  async createUser(newUser: UserCreatorViewModel): Promise<User> {
    return await this.userRepository.save(newUser);
  }

  async updateUser(updated: UserUpdaterViewModel): Promise<User> {
    const existingUser = await this.returnExistingUser(updated.id.toString());

    if (!existingUser) {
      throw new BadRequestException('An user with the given id does not exist');
    }

    return await this.userRepository.save(updated);
  }

  async deleteUser(id: string): Promise<void> {
    const existingUser = await this.returnExistingUser(id);

    if (!existingUser) {
      throw new BadRequestException('An user with the given id does not exist');
    }

    await this.userRepository.delete(id);
  }

  private async returnExistingUser(id: string): Promise<User> {
    const userToBeUpdated = await this.userRepository.findOne({
      where: { id: id },
    });

    return userToBeUpdated;
  }
}
