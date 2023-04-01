import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Linia para que ejecute las validaciones de todo
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
