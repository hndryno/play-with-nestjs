import { PickType } from "@nestjs/mapped-types";
import { CreateUserDto } from "src/user/dto/create-user.dto";

export class AuthDto extends PickType(CreateUserDto, ['username', 'password']){
    
}