import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { KonsumenService } from './konsumen.service';
import { CreateKonsumanDto, KonsumenDto } from './dto/create-konsuman.dto';
import { UpdateKonsumanDto } from './dto/update-konsuman.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { InjectUser } from 'src/etc/decorator/inject-user.decorator';
import { JwtGuard } from 'src/auth/jwt.guard';

@ApiTags('Konsumen') // untuk tag di swagger
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('konsumen')
export class KonsumenController {
  constructor(private readonly konsumenService: KonsumenService) {}

  @Post()
  @ApiBody({type: CreateKonsumanDto})
  create(@InjectUser() createKonsumanDto: CreateKonsumanDto) {
    return this.konsumenService.create(createKonsumanDto);
  }

  @Get()
  findAll() {
    return this.konsumenService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.konsumenService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody({type: UpdateKonsumanDto})
  update(@Param('id') id: string, @InjectUser() updateKonsumanDto: UpdateKonsumanDto) {
    return this.konsumenService.update(+id, updateKonsumanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.konsumenService.remove(+id);
  }
}