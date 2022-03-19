import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`${process.env.MONGODB}`, {
      autoCreate: true
    }), 
    ProductModule,
    HttpModule 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
