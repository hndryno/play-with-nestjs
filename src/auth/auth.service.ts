import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import e from 'express';
import { Helper } from 'src/helper/helper';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService : UserService,
        private jwtService : JwtService
    ){

    }

    async chekUser(username, password){
        let helper = new Helper()
        let user = await this.userService.findUsername(username);

        if(user){
            const valid = helper.compare(password, user.password);
            if(valid){
                return user;
            }else{
                throw new BadRequestException({
                    message: "Password salah"
                });
            }
        }else{
            throw new BadRequestException({
                message: "Username tidak ditemukan"
            });
        }
    }

    async generateJwtToken(user: any){
        let data_token = {id: user.id}
        let token = this.jwtService.sign(data_token)

        return {token};
    }
}
