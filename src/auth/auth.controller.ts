import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';

@ApiTags('Auth') //untuk swagger
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {

  }

  @ApiBearerAuth()
  @Get()
  checkUser(@Request() req ){
      return req.user;
  }

  @Post()
  async login(@Body() authDto : AuthDto){
    let user = await this.authService.chekUser(authDto.username, authDto.password)
    return this.authService.generateJwtToken({id: user.id})
  }
}
