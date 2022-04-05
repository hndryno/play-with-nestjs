import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';
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

  //untuk config swagger
  const configSwagger = new DocumentBuilder()
  .setTitle("point of sale documentation")
  .setDescription("Dokumentasi untuk api point of sale")
  .setVersion('1.2')
  .addBearerAuth()
  .build()

  const configCustomSwagger : SwaggerCustomOptions = {
    swaggerOptions : {docExpansion : "none" }
  }

  const doc = SwaggerModule.createDocument(app, configSwagger)
  SwaggerModule.setup("doc", app, doc, configCustomSwagger) //untuk set swagger urlnya
  await app.listen(3000);
}
bootstrap();
