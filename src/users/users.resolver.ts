import { NotFoundException } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './user';
import { UsersService } from './users.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query((returns) => [User])
  users(): Promise<User[]> {
    return this.userService.findAll();
  }
}
