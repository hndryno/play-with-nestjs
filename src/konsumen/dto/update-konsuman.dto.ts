import { PartialType } from '@nestjs/swagger';
import { CreateKonsumanDto, KonsumenDto } from './create-konsuman.dto';

export class UpdateKonsumanDto extends PartialType(KonsumenDto) {}
