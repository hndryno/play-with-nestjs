import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
      TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      // password: 'root',
      database: 'nest_admin',
      // entities: [],
      autoLoadEntities: true, //dont do in production env because it will load automatically (only for development)
      synchronize: true,
    }), ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
