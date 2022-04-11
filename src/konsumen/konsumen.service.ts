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
    return this.konsumenRepo.save(createKonsumanDto);
  }

  findAll() {
    return this.konsumenRepo.find({relations: ['user']})
  }

  findOne(id) {
    return this.konsumenRepo.findOne({
      where: { id },
      relations: ['user'] //memanggil relasi didalam findone
    });
  }

  update(id: number, updateKonsumanDto: UpdateKonsumanDto) {
    id = updateKonsumanDto.id
    return this.konsumenRepo.save(updateKonsumanDto);
    // return this.update(id, UpdateKonsumanDto);
  }

  async remove(id) {
    // id = updateKonsumanDto.id
    let konsumen = await this.konsumenRepo.findOne(id);
    console.log(konsumen)
    return this.konsumenRepo.remove(konsumen);
  }
}
