import { Module } from '@nestjs/common';
import { KonsumenService } from './konsumen.service';
import { KonsumenController } from './konsumen.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Konsumen } from './entities/konsumen.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Konsumen])
  ],
  controllers: [KonsumenController],
  providers: [KonsumenService]
})
export class KonsumenModule {}
