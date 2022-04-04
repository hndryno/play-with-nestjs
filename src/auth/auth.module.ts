import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { JwtStategy } from './jwt.strategy';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot(),//supaya kita bisa menarik seluruh variable yg ada di env
    JwtModule.register({
      secret:  `${process.env.JWT_SECRET}`,
      signOptions:{
        expiresIn: '12h'
      }
    }),
  ], //panggil user module kedalam auth module
  controllers: [AuthController],
  providers: [AuthService, JwtStategy],
  exports : [AuthService, JwtModule]
})
export class AuthModule {}
