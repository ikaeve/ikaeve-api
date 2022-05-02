import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ErrorNotFound, Request, Results, User } from './users.dto';

@Controller('users')
export class UsersController {
  @Get()
  @ApiTags('ユーザー')
  @ApiOperation({ operationId: 'ユーザー一覧取得' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: Results,
  })
  findAll(@Query() request: Request): Promise<Results> {
    return;
  }

  @Get(':user_id')
  @ApiTags('ユーザー')
  @ApiOperation({ operationId: 'ユーザー取得' })
  @ApiParam({ name: 'user_id', type: 'integer' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: User,
  })
  @ApiNotFoundResponse({ type: ErrorNotFound })
  find(): Promise<User> {
    return;
  }
}
