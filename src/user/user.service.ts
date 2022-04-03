import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Helper } from '../helper/helper';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepo : Repository<User>
  ){}

  create(createUserDto: CreateUserDto) {
    return this.userRepo.save(createUserDto);
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: any) {
    return this.userRepo.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    updateUserDto.id = id 
    let helper = new Helper();
    if(updateUserDto.password){
      updateUserDto.password = helper.hash(updateUserDto.password);
    }
    return this.userRepo.save(updateUserDto)
  }

  async remove(id: any) {
    let user = await this.userRepo.findOne(id);
    return this.userRepo.remove(user);
  }
}
