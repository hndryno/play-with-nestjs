import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { ExistValidator } from './etc/validator/exist-validator';
import { UniqueValidator } from './etc/validator/unique-validator';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      // password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
      entities: [
        User
      ],
      autoLoadEntities: true,
      synchronize : true
    }),
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, ExistValidator, UniqueValidator],
})
export class AppModule {}
