/* eslint-disable @typescript-eslint/no-namespace */
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class Request {
  @ApiProperty()
  limit: number;
  @ApiProperty()
  page: number;
}

export class User {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty({ enum: Role })
  role: Role;
  @ApiProperty()
  thumbnail_url: string;
  @ApiProperty()
  twitter_username: string;
  @ApiProperty()
  twitter_uid: string;
  @ApiProperty({ nullable: true })
  friend_code: string;
  @ApiProperty()
  comment: string;
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  updated_at: Date;
}

export class Results {
  @ApiProperty()
  total: number;
  @ApiProperty({ type: [User] })
  results: User[];
}

export interface ErrorResponse {
  error_code: number;
  error_description: string;
}

export class ErrorNotFound implements ErrorResponse {
  @ApiProperty({ default: 9404 })
  error_code: number;
  @ApiProperty({ default: 'Specific user_id is not found.' })
  error_description: string;
}
