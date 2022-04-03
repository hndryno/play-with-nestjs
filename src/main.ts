import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  //untuk validator
  app.useGlobalPipes(new ValidationPipe({
    whitelist : true, 
    //dto akan memfilter otomatis, jika ada fitur yang tidak dibutuhkan
    forbidUnknownValues: true,
    transform: true, //supaya ada message errornya
    //untuk menambahkan custom validation
    validateCustomDecorators : true,
    transformOptions : {
      enableImplicitConversion : true
    }
  }))
  await app.listen(3000);
}
bootstrap();
