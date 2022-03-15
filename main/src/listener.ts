import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  let app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [`${process.env.RABBITMQ_URL}`],
      queue: 'main_queue',
      queueOptions: {
        durable: false
      },
    },
  });

  Logger.log(JSON.stringify(app.listen()));
  
}

bootstrap();
