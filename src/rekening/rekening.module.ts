import { Module } from '@nestjs/common';
import { RekeningService } from './rekening.service';
import { RekeningController } from './rekening.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Konsumen } from 'src/konsumen/entities/konsumen.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Konsumen])
  ],
  controllers: [RekeningController],
  providers: [RekeningService]
})
export class RekeningModule {}
