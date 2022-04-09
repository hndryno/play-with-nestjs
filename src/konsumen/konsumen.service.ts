import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateKonsumanDto } from './dto/create-konsuman.dto';
import { UpdateKonsumanDto } from './dto/update-konsuman.dto';
import { Konsumen } from './entities/konsumen.entity';

@Injectable()
export class KonsumenService {
  constructor(
    @InjectRepository(Konsumen) private konsumenRepo: Repository<Konsumen>
  ){

  }
  create(createKonsumanDto: CreateKonsumanDto) {
    return this.konsumenRepo.create(createKonsumanDto);
  }

  findAll() {
    return this.konsumenRepo.find()
  }

  findOne(id) {
    return this.konsumenRepo.findOne(id);
  }

  update(id: number, updateKonsumanDto: UpdateKonsumanDto) {
    // id = updateKonsumanDto.id
    return this.konsumenRepo.save(updateKonsumanDto);
    // return this.update(id, UpdateKonsumanDto);
  }

  async remove(id) {
    // id = updateKonsumanDto.id
    let konsumen = await this.konsumenRepo.findOne(id);
    return this.remove(konsumen);
  }
}
