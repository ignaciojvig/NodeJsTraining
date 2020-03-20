import { IsNotEmpty, MaxLength, Min, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ChatCreatorViewModel {
  @ApiProperty({
    description: 'Id from the User in the Postgres Database',
    minimum: 1,
  })
  @IsNumber()
  userId: number;

  @ApiProperty({
    description: 'Message sent by the User',
    maxLength: 20,
  })
  @IsNotEmpty()
  @MaxLength(20)
  message: string;

  @ApiProperty({
    description: 'Timestamp of when the message was sent',
  })
  @IsNotEmpty()
  timestamp: Date;
}
