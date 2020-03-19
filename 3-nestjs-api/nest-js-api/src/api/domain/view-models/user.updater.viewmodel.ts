import { IsNotEmpty, MaxLength, IsEmail, Min, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { type } from 'os';

export class UserUpdaterViewModel {
  @ApiProperty({
    description: 'Id from a given User from our PostgreSQL Database',
    minimum: 1,
    type: Number,
  })
  @IsInt()
  @Min(1)
  id: number;

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

  @ApiProperty({
    description: 'Defines if a user is/is not active',
    type: Boolean,
  })
  @IsNotEmpty()
  isActive: boolean;
}
