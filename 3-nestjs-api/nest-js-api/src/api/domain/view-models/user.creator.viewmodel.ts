import { IsNotEmpty, MaxLength, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserCreatorViewModel {
  @ApiProperty({
    type: String,
    description: 'Must be the full name of a given user',
    maxLength: 30,
  })
  @IsNotEmpty()
  @MaxLength(30)
  fullName: string;

  @ApiProperty({
    type: String,
    description: 'Must be the email of a given user',
    maxLength: 30,
  })
  @IsEmail()
  @MaxLength(30)
  email: string;
}
