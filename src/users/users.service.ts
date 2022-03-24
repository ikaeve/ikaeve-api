import { Injectable } from '@nestjs/common';
import { User } from './user';

@Injectable()
export class UsersService {
  findAll(): Promise<User[]> {
    return Promise.resolve([]);
  }
}
