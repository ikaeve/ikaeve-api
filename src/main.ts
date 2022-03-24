import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { ApolloServer } from 'apollo-server-fastify';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { ApolloServerPlugin } from 'apollo-server-plugin-base';
import fastify, { FastifyInstance } from 'fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(5000);
}
bootstrap();
