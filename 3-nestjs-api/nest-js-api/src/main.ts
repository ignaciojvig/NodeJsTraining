import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ExceptionFilterHandler } from './api/filters/exception-filter.filter';
import SwaggerSetup from './environment/swagger/swagger.configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalFilters(new ExceptionFilterHandler());
  app.enableCors();
  SwaggerSetup(app);

  await app.listen(3000);
}
bootstrap();
